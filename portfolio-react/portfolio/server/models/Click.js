const mongoose = require('mongoose');

const clickSchema = new mongoose.Schema({
  project: {
    type: String,
    required: true,
    enum: ['ecommerce', 'learning-map']
  },
  page: { type: String, required: true }, // 'home' | 'work'
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Click', clickSchema);
