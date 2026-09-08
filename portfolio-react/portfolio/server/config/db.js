const mongoose = require('mongoose');

async function connectDB() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.warn('MONGO_URI not set in environment. Running API server without DB connection.');
    return;
  }
  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 3000 });
    console.log('MongoDB connected');
  } catch (err) {
    console.warn('MongoDB connection failed:', err.message, '- API server running without DB connection.');
  }
}

module.exports = connectDB;
