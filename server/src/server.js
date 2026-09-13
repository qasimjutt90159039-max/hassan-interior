require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB, getDBStatus } = require('./config/db');
const inquiriesRouter = require('./routes/inquiries');
const collectionsRouter = require('./routes/collections');

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Parsing Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health & Diagnostic Endpoint
app.get('/api/health', (req, res) => {
  const dbStatus = getDBStatus();
  res.status(200).json({
    status: 'online',
    business: 'Hassan Interior',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
    database: {
      connected: dbStatus.connected,
      state: dbStatus.connected ? 'connected' : 'disconnected (using fallback)'
    }
  });
});

// API Routes
app.use('/api/inquiries', inquiriesRouter);
app.use('/api/collections', collectionsRouter);

// Catch-all for undefined API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `API endpoint not found: ${req.method} ${req.originalUrl}`
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[Server Error]', err.message);

  const statusCode = err.status || err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// Start Server & Connect to Database
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`[Hassan Interior Server] Running on http://localhost:${PORT}`);
    console.log(`[Hassan Interior Server] Health endpoint: http://localhost:${PORT}/api/health`);
  });
};

if (require.main === module) {
  startServer();
}

module.exports = app;
