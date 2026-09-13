const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Collection = require('../models/Collection');
const { getDBStatus } = require('../config/db');

// In-memory store (empty by default as per requirement: no fake products)
let memoryCollections = [];

// Helper to validate ObjectId if using MongoDB
const isValidId = (id) => {
  return mongoose.Types.ObjectId.isValid(id) || (typeof id === 'string' && id.startsWith('col_'));
};

// GET /api/collections
router.get('/', async (req, res, next) => {
  try {
    const { category } = req.query;
    const dbStatus = getDBStatus();

    if (dbStatus.connected) {
      const query = {};
      if (category && category.toLowerCase() !== 'all') {
        query.category = new RegExp(`^${category}$`, 'i');
      }
      const collections = await Collection.find(query).sort({ createdAt: -1 });
      return res.status(200).json({
        success: true,
        count: collections.length,
        data: collections,
        storage: 'mongodb'
      });
    } else {
      let filtered = [...memoryCollections];
      if (category && category.toLowerCase() !== 'all') {
        filtered = filtered.filter(item => item.category.toLowerCase() === category.toLowerCase());
      }
      return res.status(200).json({
        success: true,
        count: filtered.length,
        data: filtered,
        storage: 'memory'
      });
    }
  } catch (error) {
    next(error);
  }
});

// GET /api/collections/:id
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid collection item ID format'
      });
    }

    const dbStatus = getDBStatus();
    if (dbStatus.connected) {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
          success: false,
          message: 'Collection item not found'
        });
      }
      const item = await Collection.findById(id);
      if (!item) {
        return res.status(404).json({
          success: false,
          message: 'Collection item not found'
        });
      }
      return res.status(200).json({
        success: true,
        data: item
      });
    } else {
      const item = memoryCollections.find(c => c._id === id);
      if (!item) {
        return res.status(404).json({
          success: false,
          message: 'Collection item not found'
        });
      }
      return res.status(200).json({
        success: true,
        data: item
      });
    }
  } catch (error) {
    next(error);
  }
});

// POST /api/collections
router.post('/', async (req, res, next) => {
  try {
    const { name, category, description, image, additionalImages, featured } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Name is required' });
    }
    if (!category || !category.trim()) {
      return res.status(400).json({ success: false, message: 'Category is required' });
    }
    if (!image || !image.trim()) {
      return res.status(400).json({ success: false, message: 'Main image URL is required' });
    }

    const newItemData = {
      name: name.trim(),
      category: category.trim(),
      description: description ? description.trim() : '',
      image: image.trim(),
      additionalImages: Array.isArray(additionalImages) ? additionalImages : [],
      featured: Boolean(featured),
      createdAt: new Date()
    };

    const dbStatus = getDBStatus();
    if (dbStatus.connected) {
      const item = new Collection(newItemData);
      const savedItem = await item.save();
      return res.status(201).json({
        success: true,
        message: 'Collection item created successfully',
        data: savedItem
      });
    } else {
      const savedItem = {
        _id: 'col_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
        ...newItemData
      };
      memoryCollections.unshift(savedItem);
      return res.status(201).json({
        success: true,
        message: 'Collection item created successfully',
        data: savedItem,
        storage: 'memory'
      });
    }
  } catch (error) {
    next(error);
  }
});

// PUT /api/collections/:id
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res.status(400).json({ success: false, message: 'Invalid collection item ID' });
    }

    const updates = req.body;
    const dbStatus = getDBStatus();

    if (dbStatus.connected) {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Collection item not found' });
      }
      const updatedItem = await Collection.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
      if (!updatedItem) {
        return res.status(404).json({ success: false, message: 'Collection item not found' });
      }
      return res.status(200).json({
        success: true,
        message: 'Collection item updated successfully',
        data: updatedItem
      });
    } else {
      const index = memoryCollections.findIndex(c => c._id === id);
      if (index === -1) {
        return res.status(404).json({ success: false, message: 'Collection item not found' });
      }
      memoryCollections[index] = { ...memoryCollections[index], ...updates };
      return res.status(200).json({
        success: true,
        message: 'Collection item updated successfully',
        data: memoryCollections[index]
      });
    }
  } catch (error) {
    next(error);
  }
});

// DELETE /api/collections/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res.status(400).json({ success: false, message: 'Invalid collection item ID' });
    }

    const dbStatus = getDBStatus();
    if (dbStatus.connected) {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Collection item not found' });
      }
      const deletedItem = await Collection.findByIdAndDelete(id);
      if (!deletedItem) {
        return res.status(404).json({ success: false, message: 'Collection item not found' });
      }
      return res.status(200).json({
        success: true,
        message: 'Collection item deleted successfully'
      });
    } else {
      const index = memoryCollections.findIndex(c => c._id === id);
      if (index === -1) {
        return res.status(404).json({ success: false, message: 'Collection item not found' });
      }
      memoryCollections.splice(index, 1);
      return res.status(200).json({
        success: true,
        message: 'Collection item deleted successfully'
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
