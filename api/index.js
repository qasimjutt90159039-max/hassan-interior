const app = require('../server/src/server');
const { connectDB } = require('../server/src/config/db');

let isConnected = false;

module.exports = async (req, res) => {
  if (!isConnected) {
    try {
      await connectDB();
      isConnected = true;
    } catch (err) {
      console.warn('[Vercel Serverless] DB connection note:', err.message);
    }
  }
  return app(req, res);
};
