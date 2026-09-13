const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Inquiry = require('../models/Inquiry');
const { getDBStatus } = require('../config/db');

// In-memory store fallback if MongoDB is not reachable
const memoryInquiries = [];

// Validation helper
const validateInquiryInput = (data) => {
  const errors = [];
  if (!data.name || typeof data.name !== 'string' || !data.name.trim()) {
    errors.push('Name is required');
  }
  if (!data.phone || typeof data.phone !== 'string' || !data.phone.trim()) {
    errors.push('Phone number is required');
  }
  if (!data.message || typeof data.message !== 'string' || !data.message.trim()) {
    errors.push('Message is required');
  }
  if (data.email && data.email.trim()) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.push('Email is invalid');
    }
  }
  return errors;
};

// POST /api/inquiries
router.post('/', async (req, res, next) => {
  try {
    const { name, phone, email, requirement, message } = req.body;

    const validationErrors = validateInquiryInput({ name, phone, email, requirement, message });
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      });
    }

    const inquiryData = {
      name: name.trim(),
      phone: phone.trim(),
      email: email ? email.trim().toLowerCase() : '',
      requirement: requirement ? requirement.trim() : 'General Inquiry',
      message: message.trim(),
      createdAt: new Date()
    };

    const dbStatus = getDBStatus();
    if (dbStatus.connected) {
      const inquiry = new Inquiry(inquiryData);
      const savedInquiry = await inquiry.save();
      return res.status(201).json({
        success: true,
        message: 'Thank you. Your inquiry has been submitted.',
        data: savedInquiry,
        storage: 'mongodb'
      });
    } else {
      // Fallback in-memory storage
      const fallbackInquiry = {
        _id: 'inq_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
        ...inquiryData
      };
      memoryInquiries.unshift(fallbackInquiry);
      return res.status(201).json({
        success: true,
        message: 'Thank you. Your inquiry has been submitted.',
        data: fallbackInquiry,
        storage: 'memory'
      });
    }
  } catch (error) {
    next(error);
  }
});

// GET /api/inquiries
router.get('/', async (req, res, next) => {
  try {
    const dbStatus = getDBStatus();
    if (dbStatus.connected) {
      const inquiries = await Inquiry.find().sort({ createdAt: -1 });
      return res.status(200).json({
        success: true,
        count: inquiries.length,
        data: inquiries,
        storage: 'mongodb'
      });
    } else {
      return res.status(200).json({
        success: true,
        count: memoryInquiries.length,
        data: memoryInquiries,
        storage: 'memory'
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
