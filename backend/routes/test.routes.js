const express = require('express');
const router = express.Router();
const { getStockPrediction } = require('../ai/stockPredictor');

// Test route to check stock prediction
router.post('/test-stock', (req, res) => {
  try {
    const { ticker } = req.body;
    const prediction = getStockPrediction(ticker || 'TCS.NS');
    
    res.json({
      success: true,
      ticker: ticker || 'TCS.NS',
      prediction: prediction
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;
