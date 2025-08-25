const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Plant name is required'],
    trim: true,
    maxlength: [100, 'Plant name cannot exceed 100 characters']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  categories: [{
    type: String,
    required: [true, 'At least one category is required'],
    enum: {
      values: [
        'Indoor',
        'Outdoor',
        'Succulent',
        'Air Purifying',
        'Home Decor',
        'Low Maintenance',
        'Flowering',
        'Foliage',
        'Herb',
        'Tropical',
        'Desert',
        'Aquatic',
        'Bonsai',
        'Climbing',
        'Hanging'
      ],
      message: 'Invalid category'
    }
  }],
  stockAvailable: {
    type: Boolean,
    default: true
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  imageUrl: {
    type: String,
    default: 'https://via.placeholder.com/300x300?text=Plant'
  },
  careLevel: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    default: 'Medium'
  },
  waterNeeds: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Medium'
  },
  lightNeeds: {
    type: String,
    enum: ['Low Light', 'Indirect Light', 'Bright Light', 'Full Sun'],
    default: 'Indirect Light'
  }
}, {
  timestamps: true
});

// Index for search functionality
plantSchema.index({ name: 'text', categories: 'text' });

// Virtual for formatted price
plantSchema.virtual('formattedPrice').get(function() {
  return `₹${this.price.toFixed(2)}`;
});

// Ensure virtual fields are serialized
plantSchema.set('toJSON', { virtuals: true });
plantSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Plant', plantSchema); 