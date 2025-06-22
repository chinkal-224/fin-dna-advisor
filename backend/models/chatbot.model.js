const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  question: String,
  answer: String,
  type: {
    type: String,
    enum: ['financial_prediction', 'financial_advice', 'general_advice', 'error'],
    default: 'general_advice'
  },
  ticker: String, // For stock-related queries
  prediction: {
    recommendation: String,
    confidence: Object
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Chat", ChatSchema);
