const express = require('express');
const router = express.Router();
const { getStockPrediction } = require('../ai/stockPredictor');

// Direct test endpoint that always returns a stock prediction
router.post('/direct-prediction', (req, res) => {
  try {
    console.log('=== DIRECT PREDICTION TEST ===');
    
    const prediction = getStockPrediction('TCS.NS');
    
    const response = {
      type: 'financial_prediction',
      content: `📊 **TCS.NS Stock Analysis (DIRECT TEST)**\n\n` +
              `🎯 **Recommendation:** ${prediction.prediction}\n\n` +
              `📈 **Confidence Levels:**\n` +
              Object.entries(prediction.confidence)
                .map(([action, conf]) => `• ${action}: ${conf}%`)
                .join('\n') + '\n\n' +
              `✅ *This is a direct test - the integration is working!*`,
      ticker: 'TCS.NS',
      prediction: prediction
    };
    
    console.log('Direct prediction response:', response);
    console.log('==============================');
    
    res.json({
      message: "Direct prediction test successful",
      data: response
    });
    
  } catch (error) {
    console.error('Direct prediction error:', error);
    res.status(500).json({
      error: error.message
    });
  }
});

module.exports = router;
