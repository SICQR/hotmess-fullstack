require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/hotmess';

const sampleProducts = [
  // HUNG Collection (Age Restricted)
  {
    title: 'HUNG Tank',
    handle: 'hung-tank',
    description: 'Oversized muscle tank for gym-to-rave flex. Cut loose, move free. Made for the bold.',
    price: { amount: 35, currency: 'GBP' },
    collection: 'HUNG',
    ageRestricted: true,
    images: [{
      url: '/images/hung-tank.jpg',
      altText: 'HUNG oversized muscle tank in black',
      isPrimary: true
    }],
    variants: [
      { title: 'S', inventory: 10, availableForSale: true },
      { title: 'M', inventory: 15, availableForSale: true },
      { title: 'L', inventory: 12, availableForSale: true },
      { title: 'XL', inventory: 8, availableForSale: true }
    ],
    tags: ['tank', 'muscle', 'gym', 'oversized'],
    seoTitle: 'HUNG Tank - Oversized Muscle Tank | HOTMESS London',
    seoDescription: 'Bold oversized muscle tank from HUNG collection. Perfect for gym-to-rave. Men-only, 18+.',
    availableForSale: true
  },
  {
    title: 'HUNG Shorts',
    handle: 'hung-shorts',
    description: 'Loose-fit athletic shorts that move with you. From deadlifts to dancefloors.',
    price: { amount: 45, currency: 'GBP' },
    collection: 'HUNG',
    ageRestricted: true,
    images: [{
      url: '/images/hung-shorts.jpg',
      altText: 'HUNG loose-fit athletic shorts in charcoal',
      isPrimary: true
    }],
    variants: [
      { title: 'S', inventory: 8, availableForSale: true },
      { title: 'M', inventory: 12, availableForSale: true },
      { title: 'L', inventory: 10, availableForSale: true },
      { title: 'XL', inventory: 6, availableForSale: true }
    ],
    tags: ['shorts', 'athletic', 'loose-fit'],
    seoTitle: 'HUNG Shorts - Athletic Loose-Fit | HOTMESS London',
    seoDescription: 'Loose-fit athletic shorts from HUNG collection. Perfect for gym and beyond. Men-only, 18+.',
    availableForSale: true
  },
  {
    title: 'HUNG Hoodie',
    handle: 'hung-hoodie',
    description: 'Oversized pullover hoodie. Comfort meets statement. Make your presence known.',
    price: { amount: 65, currency: 'GBP' },
    collection: 'HUNG',
    ageRestricted: true,
    images: [{
      url: '/images/hung-hoodie.jpg',
      altText: 'HUNG oversized pullover hoodie in black',
      isPrimary: true
    }],
    variants: [
      { title: 'S', inventory: 5, availableForSale: true },
      { title: 'M', inventory: 8, availableForSale: true },
      { title: 'L', inventory: 7, availableForSale: true },
      { title: 'XL', inventory: 4, availableForSale: true }
    ],
    tags: ['hoodie', 'oversized', 'pullover'],
    seoTitle: 'HUNG Hoodie - Oversized Pullover | HOTMESS London',
    seoDescription: 'Bold oversized pullover hoodie from HUNG collection. Statement comfort. Men-only, 18+.',
    availableForSale: true
  },

  // RAW Collection (Not Age Restricted)
  {
    title: 'RAW Leather Vest',
    handle: 'raw-leather-vest',
    description: 'Heavy leather vest with attitude. Built to last, designed to intimidate.',
    price: { amount: 120, currency: 'GBP' },
    collection: 'RAW',
    ageRestricted: false,
    images: [{
      url: '/images/raw-vest.jpg',
      altText: 'RAW heavy leather vest in black',
      isPrimary: true
    }],
    variants: [
      { title: 'S', inventory: 3, availableForSale: true },
      { title: 'M', inventory: 5, availableForSale: true },
      { title: 'L', inventory: 4, availableForSale: true },
      { title: 'XL', inventory: 2, availableForSale: true }
    ],
    tags: ['leather', 'vest', 'heavy', 'raw'],
    seoTitle: 'RAW Leather Vest - Heavy Leather | HOTMESS London',
    seoDescription: 'Premium heavy leather vest from RAW collection. Built to last.',
    availableForSale: true
  },

  // HIGH Collection (Not Age Restricted)
  {
    title: 'HIGH Varsity Tee',
    handle: 'high-varsity-tee',
    description: 'Varsity-inspired tee with locker room energy. Clean lines, bold statement.',
    price: { amount: 28, currency: 'GBP' },
    collection: 'HIGH',
    ageRestricted: false,
    images: [{
      url: '/images/high-tee.jpg',
      altText: 'HIGH varsity-inspired tee in white',
      isPrimary: true
    }],
    variants: [
      { title: 'S', inventory: 15, availableForSale: true },
      { title: 'M', inventory: 20, availableForSale: true },
      { title: 'L', inventory: 18, availableForSale: true },
      { title: 'XL', inventory: 12, availableForSale: true }
    ],
    tags: ['tee', 'varsity', 'locker-room'],
    seoTitle: 'HIGH Varsity Tee - Athletic Inspired | HOTMESS London',
    seoDescription: 'Varsity-inspired tee from HIGH collection. Locker room fantasy vibes.',
    availableForSale: true
  }
];

async function seedProducts() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Clear existing products (optional - comment out to preserve data)
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert sample products
    const insertedProducts = await Product.insertMany(sampleProducts);
    console.log(`Inserted ${insertedProducts.length} products:`);
    
    insertedProducts.forEach(product => {
      console.log(`- ${product.title} (${product.collection})`);
    });

    console.log('\nSeed completed successfully!');
    
  } catch (error) {
    console.error('Seed error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

// Run if called directly
if (require.main === module) {
  seedProducts();
}

module.exports = { seedProducts, sampleProducts };