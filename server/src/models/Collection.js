const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Collection item name is required'],
    trim: true,
    maxlength: [150, 'Name cannot exceed 150 characters']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    trim: true,
    enum: {
      values: ['Living Room', 'Bedroom', 'Interior Decor', 'Home Improvement', 'General'],
      message: '{VALUE} is not a supported category'
    }
  },
  description: {
    type: String,
    trim: true,
    default: ''
  },
  image: {
    type: String,
    required: [true, 'Main image URL is required'],
    trim: true
  },
  additionalImages: {
    type: [String],
    default: []
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.models.Collection || mongoose.model('Collection', collectionSchema);
