const express = require('express');
const Product = require('../models/Product');
const { ageVerificationRateLimit } = require('../middleware/ageVerification');

const router = express.Router();

// Apply rate limiting to all product routes
router.use(ageVerificationRateLimit);

/**
 * GET /api/products
 * Get all products with GDPR-compliant filtering
 */
router.get('/', async (req, res) => {
  try {
    const { 
      collection, 
      limit = 20, 
      page = 1,
      availableOnly = 'true'
    } = req.query;

    // Build query with purpose limitation
    const query = {
      dataProcessingPurpose: 'product_display'
    };

    if (collection) {
      query.collection = collection.toUpperCase();
    }

    if (availableOnly === 'true') {
      query.availableForSale = true;
    }

    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const limitNum = Math.min(parseInt(limit), 50); // Max 50 items per request

    const products = await Product.find(query)
      .select('-__v') // Exclude version field
      .limit(limitNum)
      .skip(skip)
      .sort({ createdAt: -1 });

    const total = await Product.countDocuments(query);

    // GDPR compliance: minimal data exposure
    const safeProducts = products.map(product => ({
      id: product._id,
      title: product.title,
      handle: product.handle,
      description: product.description,
      price: product.price,
      collection: product.collection,
      primaryImage: product.primaryImage,
      availableForSale: product.availableForSale,
      ageRestricted: product.ageRestricted,
      variants: product.variants.map(variant => ({
        id: variant._id,
        title: variant.title,
        price: variant.price || product.price,
        availableForSale: variant.availableForSale
      }))
    }));

    res.json({
      products: safeProducts,
      pagination: {
        current: parseInt(page),
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum)
      },
      dataProcessingPurpose: 'product_display',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Products fetch error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch products',
      message: 'Internal server error'
    });
  }
});

/**
 * GET /api/products/collection/:collection
 * Get products by collection (RAW, HUNG, HIGH, SUPER)
 */
router.get('/collection/:collection', async (req, res) => {
  try {
    const { collection } = req.params;
    const collectionUpper = collection.toUpperCase();

    // Validate collection
    if (!['RAW', 'HUNG', 'HIGH', 'SUPER'].includes(collectionUpper)) {
      return res.status(400).json({
        error: 'Invalid collection',
        validCollections: ['RAW', 'HUNG', 'HIGH', 'SUPER']
      });
    }

    // HUNG collection requires age verification (handled by middleware)
    const products = await Product.findByCollection(collectionUpper);

    const safeProducts = products.map(product => ({
      id: product._id,
      title: product.title,
      handle: product.handle,
      description: product.description,
      price: product.price,
      collection: product.collection,
      primaryImage: product.primaryImage,
      availableForSale: product.availableForSale,
      ageRestricted: product.ageRestricted
    }));

    res.json({
      collection: collectionUpper,
      products: safeProducts,
      requiresAgeVerification: collectionUpper === 'HUNG',
      dataProcessingPurpose: 'product_display',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Collection fetch error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch collection',
      message: 'Internal server error'
    });
  }
});

/**
 * GET /api/products/:handle
 * Get single product by handle
 */
router.get('/:handle', async (req, res) => {
  try {
    const { handle } = req.params;

    const product = await Product.findOne({ 
      handle: handle.toLowerCase(),
      availableForSale: true,
      dataProcessingPurpose: 'product_display'
    }).select('-__v');

    if (!product) {
      return res.status(404).json({
        error: 'Product not found',
        handle
      });
    }

    // Check if product requires age verification
    if (product.requiresAgeVerification() && !req.isAgeVerified) {
      return res.status(403).json({
        error: 'Age verification required',
        message: 'This product requires age verification',
        requiresAgeVerification: true,
        redirectTo: '/legal/age'
      });
    }

    // Return full product details for single product view
    const safeProduct = {
      id: product._id,
      title: product.title,
      handle: product.handle,
      description: product.description,
      price: product.price,
      collection: product.collection,
      images: product.images,
      variants: product.variants,
      availableForSale: product.availableForSale,
      ageRestricted: product.ageRestricted,
      tags: product.tags,
      seoTitle: product.seoTitle,
      seoDescription: product.seoDescription
    };

    res.json({
      product: safeProduct,
      dataProcessingPurpose: 'product_display',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Product fetch error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch product',
      message: 'Internal server error'
    });
  }
});

/**
 * POST /api/products (Admin only - would need auth middleware in production)
 * Create new product
 */
router.post('/', async (req, res) => {
  try {
    // In production, add authentication middleware here
    const productData = req.body;

    // Validate required fields
    if (!productData.title || !productData.handle || !productData.description) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['title', 'handle', 'description']
      });
    }

    // Set age restriction based on collection
    if (productData.collection === 'HUNG') {
      productData.ageRestricted = true;
    }

    const product = new Product({
      ...productData,
      createdBy: 'admin', // In production, use actual user ID
      dataProcessingPurpose: 'product_display'
    });

    await product.save();

    res.status(201).json({
      message: 'Product created successfully',
      product: {
        id: product._id,
        title: product.title,
        handle: product.handle,
        collection: product.collection
      }
    });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        error: 'Product handle already exists',
        field: 'handle'
      });
    }

    console.error('Product creation error:', error);
    res.status(500).json({ 
      error: 'Failed to create product',
      message: 'Internal server error'
    });
  }
});

/**
 * GDPR Data Export endpoint
 * GET /api/products/gdpr/export
 */
router.get('/gdpr/export', async (req, res) => {
  try {
    // Products don't contain personal data, but we provide this for compliance
    const exportData = await Product.exportUserData();
    
    res.json({
      dataType: 'products',
      exportedAt: new Date().toISOString(),
      data: exportData,
      note: 'Product data is not user-specific and contains no personal information'
    });
  } catch (error) {
    console.error('GDPR export error:', error);
    res.status(500).json({ 
      error: 'Failed to export data',
      message: 'Internal server error'
    });
  }
});

module.exports = router;