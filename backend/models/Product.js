const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  // Basic product info
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 255
  },
  handle: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: /^[a-z0-9-]+$/
  },
  description: {
    type: String,
    required: true,
    maxlength: 2000
  },
  
  // Pricing
  price: {
    amount: {
      type: Number,
      required: true,
      min: 0
    },
    currency: {
      type: String,
      required: true,
      default: 'GBP',
      uppercase: true,
      enum: ['GBP', 'USD', 'EUR']
    }
  },
  
  // Collection (RAW, HUNG, HIGH, SUPER)
  collection: {
    type: String,
    required: true,
    uppercase: true,
    enum: ['RAW', 'HUNG', 'HIGH', 'SUPER']
  },
  
  // Age restriction (18+ required for HUNG collection)
  ageRestricted: {
    type: Boolean,
    default: function() {
      return this.collection === 'HUNG';
    }
  },
  
  // Images
  images: [{
    url: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      required: true
    },
    isPrimary: {
      type: Boolean,
      default: false
    }
  }],
  
  // Variants (sizes, colors, etc.)
  variants: [{
    title: {
      type: String,
      required: true
    },
    price: {
      amount: Number,
      currency: String
    },
    inventory: {
      type: Number,
      default: 0,
      min: 0
    },
    sku: String,
    availableForSale: {
      type: Boolean,
      default: true
    }
  }],
  
  // SEO and metadata
  seoTitle: String,
  seoDescription: String,
  tags: [String],
  
  // Availability
  availableForSale: {
    type: Boolean,
    default: true
  },
  
  // GDPR compliance - purpose limitation
  dataProcessingPurpose: {
    type: String,
    required: true,
    enum: ['product_display', 'inventory_management', 'sales_processing'],
    default: 'product_display'
  },
  
  // Audit fields
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: String,
    required: true,
    default: 'system'
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for performance
ProductSchema.index({ handle: 1 });
ProductSchema.index({ collection: 1 });
ProductSchema.index({ availableForSale: 1 });
ProductSchema.index({ createdAt: -1 });

// Virtual for primary image
ProductSchema.virtual('primaryImage').get(function() {
  const primary = this.images.find(img => img.isPrimary);
  return primary || this.images[0] || null;
});

// Pre-save middleware to update timestamps
ProductSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Method to check if product requires age verification
ProductSchema.methods.requiresAgeVerification = function() {
  return this.ageRestricted || this.collection === 'HUNG';
};

// Static method to get products by collection
ProductSchema.statics.findByCollection = function(collection) {
  return this.find({ 
    collection: collection.toUpperCase(),
    availableForSale: true 
  }).sort({ createdAt: -1 });
};

// Static method for GDPR-compliant data export
ProductSchema.statics.exportUserData = function(userId) {
  // For products, we don't store user-specific data
  // This is here for compliance framework completeness
  return Promise.resolve({
    products: 'No personal data stored in products collection'
  });
};

module.exports = mongoose.model('Product', ProductSchema);