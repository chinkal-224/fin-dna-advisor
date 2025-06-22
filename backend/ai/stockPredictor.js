// Mock stock prediction model
const stockPredictions = {
  'TCS.NS': {
    prediction: "BUY 💸",
    confidence: {
      "BUY 💸": 72.3,
      "HOLD 🧘‍♂️": 21.4,
      "SELL 🚨": 6.3
    }
  },
  'INFY.NS': {
    prediction: "HOLD 🧘‍♂️",
    confidence: {
      "BUY 💸": 45.2,
      "HOLD 🧘‍♂️": 48.7,
      "SELL 🚨": 6.1
    }
  },
  'RELIANCE.NS': {
    prediction: "BUY 💸",
    confidence: {
      "BUY 💸": 68.9,
      "HOLD 🧘‍♂️": 25.3,
      "SELL 🚨": 5.8
    }
  },
  'HDFCBANK.NS': {
    prediction: "HOLD 🧘‍♂️",
    confidence: {
      "BUY 💸": 42.1,
      "HOLD 🧘‍♂️": 51.2,
      "SELL 🚨": 6.7
    }
  }
};

// Generate random but realistic predictions for other stocks
const generatePrediction = (ticker) => {
  const predictions = ["BUY 💸", "HOLD 🧘‍♂️", "SELL 🚨"];
  const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
  
  let confidence;
  switch (randomPrediction) {
    case "BUY 💸":
      confidence = {
        "BUY 💸": 60 + Math.random() * 25,
        "HOLD 🧘‍♂️": 20 + Math.random() * 20,
        "SELL 🚨": 5 + Math.random() * 10
      };
      break;
    case "HOLD 🧘‍♂️":
      confidence = {
        "BUY 💸": 30 + Math.random() * 20,
        "HOLD 🧘‍♂️": 40 + Math.random() * 25,
        "SELL 🚨": 5 + Math.random() * 15
      };
      break;
    case "SELL 🚨":
      confidence = {
        "BUY 💸": 10 + Math.random() * 15,
        "HOLD 🧘‍♂️": 25 + Math.random() * 20,
        "SELL 🚨": 50 + Math.random() * 30
      };
      break;
  }
  
  // Normalize to 100%
  const total = Object.values(confidence).reduce((sum, val) => sum + val, 0);
  Object.keys(confidence).forEach(key => {
    confidence[key] = Math.round((confidence[key] / total) * 100 * 10) / 10;
  });
  
  return {
    prediction: randomPrediction,
    confidence: confidence
  };
};

const getStockPrediction = (ticker) => {
  // Check if we have a predefined prediction
  if (stockPredictions[ticker]) {
    return stockPredictions[ticker];
  }
  
  // Generate a random prediction
  return generatePrediction(ticker);
};

module.exports = { getStockPrediction };
