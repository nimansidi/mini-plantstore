const express = require('express');
const { body, validationResult } = require('express-validator');
const Plant = require('../models/Plant');

const router = express.Router();

// Get all plants with search and filter
router.get('/', async (req, res) => {
  try {
    const { search, category, minPrice, maxPrice, stockAvailable, sortBy = 'name', sortOrder = 'asc' } = req.query;
    
    let query = {};
    
    // Search functionality
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { categories: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Category filter
    if (category && category !== 'all') {
      query.categories = { $in: [category] };
    }
    
    // Price range filter
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = parseFloat(minPrice);
      if (maxPrice) query.price.$lte = parseFloat(maxPrice);
    }
    
    // Stock availability filter
    if (stockAvailable !== undefined) {
      query.stockAvailable = stockAvailable === 'true';
    }
    
    // Sorting
    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
    
    const plants = await Plant.find(query)
      .sort(sortOptions)
      .select('-__v');
    
    res.json({
      success: true,
      count: plants.length,
      data: plants
    });
  } catch (error) {
    console.error('Error fetching plants:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching plants',
      error: error.message
    });
  }
});

// Get plant by ID
router.get('/:id', async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id).select('-__v');
    
    if (!plant) {
      return res.status(404).json({
        success: false,
        message: 'Plant not found'
      });
    }
    
    res.json({
      success: true,
      data: plant
    });
  } catch (error) {
    console.error('Error fetching plant:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching plant',
      error: error.message
    });
  }
});

// Add new plant (Admin feature)
router.post('/', [
  body('name')
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Plant name is required and must be between 1-100 characters'),
  body('price')
    .isFloat({ min: 0 })
    .withMessage('Price must be a positive number'),
  body('categories')
    .isArray({ min: 1 })
    .withMessage('At least one category is required'),
  body('categories.*')
    .isIn([
      'Indoor', 'Outdoor', 'Succulent', 'Air Purifying', 'Home Decor',
      'Low Maintenance', 'Flowering', 'Foliage', 'Herb', 'Tropical',
      'Desert', 'Aquatic', 'Bonsai', 'Climbing', 'Hanging'
    ])
    .withMessage('Invalid category'),
  body('stockAvailable')
    .optional()
    .isBoolean()
    .withMessage('Stock availability must be a boolean'),
  body('description')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Description cannot exceed 500 characters'),
  body('careLevel')
    .optional()
    .isIn(['Easy', 'Medium', 'Hard'])
    .withMessage('Invalid care level'),
  body('waterNeeds')
    .optional()
    .isIn(['Low', 'Medium', 'High'])
    .withMessage('Invalid water needs'),
  body('lightNeeds')
    .optional()
    .isIn(['Low Light', 'Indirect Light', 'Bright Light', 'Full Sun'])
    .withMessage('Invalid light needs')
], async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }
    
    const plant = new Plant(req.body);
    await plant.save();
    
    res.status(201).json({
      success: true,
      message: 'Plant added successfully',
      data: plant
    });
  } catch (error) {
    console.error('Error adding plant:', error);
    res.status(500).json({
      success: false,
      message: 'Error adding plant',
      error: error.message
    });
  }
});

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Mini Plant Store API is running' });
});

// Update plant
router.put('/:id', [
  body('name')
    .optional()
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Plant name must be between 1-100 characters'),
  body('price')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Price must be a positive number'),
  body('categories')
    .optional()
    .isArray({ min: 1 })
    .withMessage('At least one category is required'),
  body('categories.*')
    .optional()
    .isIn([
      'Indoor', 'Outdoor', 'Succulent', 'Air Purifying', 'Home Decor',
      'Low Maintenance', 'Flowering', 'Foliage', 'Herb', 'Tropical',
      'Desert', 'Aquatic', 'Bonsai', 'Climbing', 'Hanging'
    ])
    .withMessage('Invalid category')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }
    
    const plant = await Plant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).select('-__v');
    
    if (!plant) {
      return res.status(404).json({
        success: false,
        message: 'Plant not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Plant updated successfully',
      data: plant
    });
  } catch (error) {
    console.error('Error updating plant:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating plant',
      error: error.message
    });
  }
});

// Delete plant
router.delete('/:id', async (req, res) => {
  try {
    const plant = await Plant.findByIdAndDelete(req.params.id);
    
    if (!plant) {
      return res.status(404).json({
        success: false,
        message: 'Plant not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Plant deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting plant:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting plant',
      error: error.message
    });
  }
});

// Get all categories
router.get('/categories/all', async (req, res) => {
  try {
    const categories = [
      'Indoor', 'Outdoor', 'Succulent', 'Air Purifying', 'Home Decor',
      'Low Maintenance', 'Flowering', 'Foliage', 'Herb', 'Tropical',
      'Desert', 'Aquatic', 'Bonsai', 'Climbing', 'Hanging'
    ];
    
    res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching categories',
      error: error.message
    });
  }
});

module.exports = router; 