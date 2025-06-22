const Chat = require('../models/chatbot.model');
const axios = require('axios');
const { getStockPrediction } = require('../ai/stockPredictor');

// Helper function to detect if query is stock-related with enhanced intelligence
const detectStockQuery = (question) => {
  const stockKeywords = [
    // Direct stock terms
    'stock', 'share', 'equity', 'ticker', 'price', 'prediction', 'forecast',
    'buy', 'sell', 'hold', 'trading', 'market analysis', 'technical analysis',
    
    // Stock exchanges and indices
    '.NS', '.BO', 'NSE', 'BSE', 'nifty', 'sensex', 'nifty 50', 'bank nifty',
    
    // Popular Indian stocks
    'TCS', 'RELIANCE', 'INFY', 'WIPRO', 'HDFC', 'ICICI', 'SBI', 'ADANI', 
    'BAJAJ', 'MARUTI', 'LT', 'ITC', 'HDFCBANK', 'KOTAKBANK', 'ASIANPAINT',
    'HINDUNILVR', 'BHARTIARTL', 'AXISBANK', 'POWERGRID', 'NESTLEIND',
    
    // Stock-specific phrases
    'share price', 'stock price', 'market cap', 'pe ratio', 'dividend yield',
    'earnings', 'quarterly results', 'stock recommendation', 'target price',
    'stock analysis', 'fundamental analysis', 'chart analysis'
  ];
  
  const lowerQuestion = question.toLowerCase();
  
  // Check for direct stock mentions with higher confidence
  const directStockMention = stockKeywords.some(keyword => 
    lowerQuestion.includes(keyword.toLowerCase())
  );
  
  // Check for stock ticker patterns
  const tickerPattern = /\b[A-Z]{2,5}\.(?:NS|BO)\b/i;
  const hasTickerPattern = tickerPattern.test(question);
  
  // Check for company names that might be stocks
  const companyPattern = /\b(?:TCS|RELIANCE|INFY|WIPRO|HDFC|ICICI|SBI|ADANI|BAJAJ|MARUTI|LT|ITC)\b/i;
  const hasCompanyMention = companyPattern.test(question);
  
  // Enhanced logic for stock detection
  const isStock = directStockMention || hasTickerPattern || hasCompanyMention;
  
  let ticker = null;
  if (isStock) {
    ticker = extractStockTicker(question);
  }
  
  console.log('🔍 Stock detection analysis:', {
    directStockMention,
    hasTickerPattern,
    hasCompanyMention,
    isStock,
    ticker
  });
  
  return { isStock, ticker };
};

// Enhanced helper function to extract stock ticker from query
const extractStockTicker = (question) => {
  const tickerPatterns = [
    /([A-Z]{2,5}\.NS)/gi,  // NSE format like TCS.NS
    /([A-Z]{2,5}\.BO)/gi,  // BSE format like TCS.BO
    /\b(TCS|RELIANCE|INFY|WIPRO|HDFCBANK|ICICIBANK|SBIN|ADANIPORTS|BAJFINANCE|MARUTI|LT|ITC|ASIANPAINT|HINDUNILVR|BHARTIARTL|AXISBANK|POWERGRID|NESTLEIND|KOTAKBANK)\b/gi
  ];
  
  // Company name to ticker mapping
  const companyMap = {
    'TCS': 'TCS.NS',
    'RELIANCE': 'RELIANCE.NS',
    'INFY': 'INFY.NS',
    'INFOSYS': 'INFY.NS',
    'WIPRO': 'WIPRO.NS',
    'HDFC BANK': 'HDFCBANK.NS',
    'HDFCBANK': 'HDFCBANK.NS',
    'HDFC': 'HDFCBANK.NS',
    'ICICI BANK': 'ICICIBANK.NS',
    'ICICIBANK': 'ICICIBANK.NS',
    'ICICI': 'ICICIBANK.NS',
    'SBI': 'SBIN.NS',
    'STATE BANK': 'SBIN.NS',
    'ADANI': 'ADANIPORTS.NS',
    'BAJAJ FINANCE': 'BAJFINANCE.NS',
    'BAJAJ': 'BAJFINANCE.NS',
    'MARUTI': 'MARUTI.NS',
    'L&T': 'LT.NS',
    'LT': 'LT.NS',
    'ITC': 'ITC.NS',
    'ASIAN PAINTS': 'ASIANPAINT.NS',
    'HINDUSTAN UNILEVER': 'HINDUNILVR.NS',
    'HUL': 'HINDUNILVR.NS',
    'BHARTI AIRTEL': 'BHARTIARTL.NS',
    'AIRTEL': 'BHARTIARTL.NS',
    'AXIS BANK': 'AXISBANK.NS',
    'POWER GRID': 'POWERGRID.NS',
    'NESTLE': 'NESTLEIND.NS',
    'KOTAK BANK': 'KOTAKBANK.NS',
    'KOTAK': 'KOTAKBANK.NS'
  };
  
  const upperQuestion = question.toUpperCase();
  
  // First try exact ticker patterns
  for (const pattern of tickerPatterns) {
    const match = question.match(pattern);
    if (match) {
      let ticker = match[0].toUpperCase();
      // Add .NS if no exchange specified for known companies
      if (!ticker.includes('.') && companyMap[ticker]) {
        ticker = companyMap[ticker];
      } else if (!ticker.includes('.')) {
        ticker += '.NS';
      }
      return ticker;
    }
  }
  
  // Try company name mapping
  for (const [company, ticker] of Object.entries(companyMap)) {
    if (upperQuestion.includes(company)) {
      return ticker;
    }
  }
  
  // Default to TCS.NS if no specific ticker found but it's a stock query
  return 'TCS.NS';
};

// Handle stock-related queries
const handleStockQuery = async (question, ticker) => {
  console.log('📈 Processing stock query for ticker:', ticker);
  
  try {
    // Get prediction from our model
    const stockPrediction = getStockPrediction(ticker);
    console.log('✅ Stock prediction result:', stockPrediction);
    
    return {
      type: 'financial_prediction',
      content: `📊 **${ticker} Stock Analysis**\n\n` +
              `🎯 **Recommendation:** ${stockPrediction.prediction}\n\n` +
              `📈 **Confidence Levels:**\n` +
              Object.entries(stockPrediction.confidence)
                .map(([action, conf]) => `• ${action}: ${conf}%`)
                .join('\n') + '\n\n' +
              `✅ *Analysis based on our trained financial model*`,
      ticker: ticker,
      prediction: stockPrediction
    };
  } catch (error) {
    console.error('❌ Error getting stock prediction:', error);
    
    // Fallback stock prediction
    return {
      type: 'financial_prediction',
      content: `📊 **${ticker} Stock Analysis (Fallback)**\n\n` +
              `🎯 **Recommendation:** HOLD 🧘‍♂️\n\n` +
              `📈 **Confidence Levels:**\n` +
              `• BUY 💸: 45%\n` +
              `• HOLD 🧘‍♂️: 40%\n` +
              `• SELL 🚨: 15%\n\n` +
              `⚠️ *Fallback prediction due to model unavailability*`,
      ticker: ticker,
      prediction: {
        prediction: "HOLD 🧘‍♂️",
        confidence: {
          "BUY 💸": 45,
          "HOLD 🧘‍♂️": 40,
          "SELL 🚨": 15
        }
      }
    };
  }
};

// Enhanced financial query analyzer
const analyzeFinancialQuery = (question) => {
  const lowerQuestion = question.toLowerCase();
  
  // Create comprehensive keyword mappings
  const queryPatterns = {
    investment: {
      keywords: ['invest', 'investment', 'portfolio', 'mutual fund', 'equity', 'debt', 'sip', 'lumpsum', 'asset allocation'],
      subtypes: {
        beginner: ['new to investing', 'start investing', 'first time', 'beginner', 'how to invest'],
        sip: ['sip', 'systematic investment', 'monthly investment', 'regular investment'],
        lumpsum: ['lumpsum', 'lump sum', 'one time investment', 'bulk investment'],
        mutual_funds: ['mutual fund', 'mf', 'equity fund', 'debt fund', 'hybrid fund'],
        stocks: ['direct equity', 'stocks', 'shares', 'individual stocks'],
        retirement: ['retirement', 'pension', 'old age', 'nps', 'retirement planning'],
        risk: ['risk', 'safe investment', 'low risk', 'high risk', 'aggressive', 'conservative']
      }
    },
    savings: {
      keywords: ['save', 'saving', 'emergency fund', 'fd', 'fixed deposit', 'ppf', 'saving account'],
      subtypes: {
        emergency: ['emergency', 'contingency', 'urgent money', 'emergency fund'],
        tax_saving: ['80c', 'tax save', 'tax saving', 'elss', 'ppf', 'tax deduction'],
        short_term: ['short term', 'liquid', 'quick access', '1 year', '2 year'],
        long_term: ['long term', 'ppf', '15 year', 'retirement savings']
      }
    },
    loans: {
      keywords: ['loan', 'emi', 'home loan', 'personal loan', 'car loan', 'education loan', 'credit'],
      subtypes: {
        home: ['home loan', 'housing loan', 'property loan', 'mortgage'],
        personal: ['personal loan', 'unsecured loan'],
        vehicle: ['car loan', 'vehicle loan', 'auto loan'],
        education: ['education loan', 'student loan', 'study loan']
      }
    },
    insurance: {
      keywords: ['insurance', 'cover', 'policy', 'premium', 'claim', 'life insurance', 'health insurance'],
      subtypes: {
        life: ['life insurance', 'term insurance', 'life cover'],
        health: ['health insurance', 'medical insurance', 'health cover'],
        vehicle: ['car insurance', 'vehicle insurance', 'motor insurance']
      }
    },
    budget: {
      keywords: ['budget', 'expense', 'spending', 'monthly expense', 'cost cutting', 'money management'],
      subtypes: {
        planning: ['budget planning', 'expense planning', 'financial planning'],
        tracking: ['track expense', 'monitor spending', 'expense tracking'],
        reduction: ['save money', 'reduce expense', 'cost cutting', 'money saving tips']
      }
    },
    tax: {
      keywords: ['tax', 'deduction', 'income tax', 'tds', 'advance tax', 'tax planning', 'itr'],
      subtypes: {
        planning: ['tax planning', 'tax save', 'tax optimization'],
        filing: ['itr', 'income tax return', 'tax filing'],
        deductions: ['80c', '80d', 'deduction', 'tax benefit']
      }
    },
    crypto: {
      keywords: ['crypto', 'cryptocurrency', 'bitcoin', 'ethereum', 'digital currency', 'blockchain'],
      subtypes: {
        basics: ['what is crypto', 'cryptocurrency basics', 'bitcoin basics'],
        investment: ['crypto investment', 'invest in crypto', 'crypto portfolio'],
        tax: ['crypto tax', 'cryptocurrency tax', 'bitcoin tax']
      }
    },
    credit: {
      keywords: ['credit card', 'credit score', 'cibil', 'credit history', 'credit limit'],
      subtypes: {
        score: ['credit score', 'cibil score', 'credit rating'],
        cards: ['credit card', 'best credit card', 'credit card benefits'],
        improvement: ['improve credit score', 'build credit history']
      }
    }
  };

  // Find the best matching category and subtype
  let bestMatch = { category: null, subtype: null, confidence: 0 };
  
  for (const [category, data] of Object.entries(queryPatterns)) {
    // Check main keywords
    const mainKeywordMatches = data.keywords.filter(keyword => 
      lowerQuestion.includes(keyword)
    ).length;
    
    if (mainKeywordMatches > 0) {
      // Check subtypes for more specific matching
      for (const [subtype, subtypeKeywords] of Object.entries(data.subtypes)) {
        const subtypeMatches = subtypeKeywords.filter(keyword => 
          lowerQuestion.includes(keyword)
        ).length;
        
        const confidence = mainKeywordMatches + (subtypeMatches * 2); // Weight subtypes more
        
        if (confidence > bestMatch.confidence) {
          bestMatch = { category, subtype, confidence };
        }
      }
      
      // If no specific subtype matched, use general category
      if (bestMatch.category !== category && mainKeywordMatches > bestMatch.confidence) {
        bestMatch = { category, subtype: 'general', confidence: mainKeywordMatches };
      }
    }
  }
  
  return bestMatch;
};

// Generate dynamic financial responses
const generateDynamicResponse = (question, analysis) => {
  const { category, subtype } = analysis;
  
  // Generate contextual responses based on analysis
  switch (category) {
    case 'investment':
      return generateInvestmentAdvice(question, subtype);
    case 'savings':
      return generateSavingsAdvice(question, subtype);
    case 'loans':
      return generateLoanAdvice(question, subtype);
    case 'insurance':
      return generateInsuranceAdvice(question, subtype);
    case 'budget':
      return generateBudgetAdvice(question, subtype);
    case 'tax':
      return generateTaxAdvice(question, subtype);
    case 'crypto':
      return generateCryptoAdvice(question, subtype);
    case 'credit':
      return generateCreditAdvice(question, subtype);
    default:
      return generateGeneralAdvice(question);
  }
};

// Specific advice generators
const generateInvestmentAdvice = (question, subtype) => {
  const responses = {
    beginner: {
      title: "Investment Guide for Beginners",
      icon: "🎯",
      content: [
        "**Start Your Investment Journey:**",
        "• Begin with an emergency fund (6 months expenses)",
        "• Start SIP in diversified equity mutual funds",
        "• Consider index funds for low-cost investing",
        "• Invest only surplus money after expenses",
        "",
        "**Beginner-Friendly Options:**",
        "• Large Cap Mutual Funds (safer)",
        "• Balanced/Hybrid Funds (moderate risk)",
        "• PPF for tax-free long-term growth",
        "• ELSS for tax saving + equity exposure"
      ]
    },
    sip: {
      title: "SIP Investment Strategy",
      icon: "📈",
      content: [
        "**Power of SIP (Systematic Investment Plan):**",
        "• Invest fixed amount monthly regardless of market",
        "• Benefits from rupee cost averaging",
        "• Builds discipline and consistency",
        "• Start with ₹1,000-5,000 per month",
        "",
        "**Best SIP Options:**",
        "• Large Cap Funds: 30-40% allocation",
        "• Mid Cap Funds: 20-30% allocation",
        "• Small Cap Funds: 10-20% allocation",
        "• International Funds: 10-15% allocation"
      ]
    },
    retirement: {
      title: "Retirement Planning Guide",
      icon: "🏖️",
      content: [
        "**Building Your Retirement Corpus:**",
        "• Start early - time is your biggest asset",
        "• Target 25-30x annual expenses as corpus",
        "• Use NPS for additional tax benefits",
        "• Consider equity-heavy portfolio when young",
        "",
        "**Retirement Investment Mix:**",
        "• Equity Mutual Funds: 60-70%",
        "• Debt Instruments: 20-30%",
        "• Gold/REITs: 5-10%",
        "• EPF + NPS: Mandatory contributions"
      ]
    }
  };

  const response = responses[subtype] || responses.beginner;
  
  return {
    type: 'financial_advice',
    content: `${response.icon} **${response.title}**\n\n${response.content.join('\n')}\n\n⚠️ *Investments are subject to market risks. Consider your risk appetite and investment horizon.*`
  };
};

const generateSavingsAdvice = (question, subtype) => {
  const amount = extractAmount(question);
  const timeframe = extractTimeframe(question);
  
  let advice = "💰 **Smart Savings Strategy**\n\n";
  
  if (subtype === 'emergency') {
    advice += `🛡️ **Emergency Fund Planning:**\n`;
    advice += `• Target: 6-12 months of expenses\n`;
    advice += `• Keep in liquid, easily accessible options\n`;
    advice += `• Savings Account + Liquid Funds combination\n`;
    advice += `• Don't invest emergency fund in equity\n\n`;
  }
  
  if (amount) {
    advice += `💵 **For ₹${amount} Investment:**\n`;
    if (amount < 10000) {
      advice += `• Start with Recurring Deposit or SIP\n`;
      advice += `• Consider liquid funds for flexibility\n`;
    } else if (amount < 100000) {
      advice += `• Mix of FD (60%) + Liquid Funds (40%)\n`;
      advice += `• Consider debt mutual funds for better returns\n`;
    } else {
      advice += `• Diversify across FD, debt funds, and short-term bonds\n`;
      advice += `• Consider ladder strategy for different maturity periods\n`;
    }
    advice += `\n`;
  }
  
  if (timeframe) {
    advice += `⏰ **For ${timeframe} timeframe:**\n`;
    if (timeframe.includes('1') || timeframe.includes('short')) {
      advice += `• Liquid Funds or Ultra Short Duration Funds\n`;
      advice += `• Savings Account or Short-term FD\n`;
    } else if (timeframe.includes('3') || timeframe.includes('5')) {
      advice += `• Debt Mutual Funds or Medium Duration Funds\n`;
      advice += `• Bank FDs with higher interest rates\n`;
    }
    advice += `\n`;
  }
  
  advice += `🏦 **Current Best Options:**\n`;
  advice += `• High-yield Savings: 4-6% p.a.\n`;
  advice += `• Fixed Deposits: 6-7.5% p.a.\n`;
  advice += `• Liquid Funds: 3-5% p.a.\n`;
  advice += `• Debt Funds: 7-9% p.a. (tax efficient)\n\n`;
  advice += `✅ *Choose based on your liquidity needs and risk tolerance*`;
  
  return {
    type: 'financial_advice',
    content: advice
  };
};

// Helper functions to extract context from questions
const extractAmount = (question) => {
  const amountRegex = /₹?\s*(\d+(?:,\d+)*(?:\.\d+)?)\s*(?:rupees?|rs|₹|lakh?s?|crores?)?/i;
  const match = question.match(amountRegex);
  if (match) {
    let amount = match[1].replace(/,/g, '');
    if (question.toLowerCase().includes('lakh')) {
      amount = parseFloat(amount) * 100000;
    } else if (question.toLowerCase().includes('crore')) {
      amount = parseFloat(amount) * 10000000;
    }
    return parseInt(amount);
  }
  return null;
};

const extractTimeframe = (question) => {
  const timeRegex = /(\d+)\s*(year|month|day)s?|short\s*term|long\s*term/gi;
  const match = question.match(timeRegex);
  return match ? match[0] : null;
};

// Add more specific generators for other categories...
const generateLoanAdvice = (question, subtype) => {
  return {
    type: 'financial_advice',
    content: `🏦 **Loan Guidance**\n\n🎯 **Key Tips:**\n• Compare interest rates across banks\n• Maintain good credit score (750+)\n• Consider loan tenure vs EMI trade-off\n• Pre-payment reduces total interest\n\n💡 *EMI should not exceed 40% of monthly income*`
  };
};

const generateInsuranceAdvice = (question, subtype) => {
  return {
    type: 'financial_advice',
    content: `🛡️ **Insurance Planning**\n\n🎯 **Essential Coverage:**\n• Term Life Insurance: 10-15x annual income\n• Health Insurance: Min ₹5L family floater\n• Accident Insurance: Additional protection\n• Vehicle Insurance: Comprehensive coverage\n\n⚠️ *Insurance is protection, not investment*`
  };
};

const generateBudgetAdvice = (question, subtype) => {
  return {
    type: 'financial_advice',
    content: `📊 **Smart Budgeting**\n\n🎯 **50-30-20 Rule:**\n• 50% - Needs (rent, food, utilities)\n• 30% - Wants (entertainment, dining)\n• 20% - Savings & Investments\n\n💡 **Track & Optimize:**\n• Use expense tracking apps\n• Review monthly spending patterns\n• Cut unnecessary subscriptions`
  };
};

const generateTaxAdvice = (question, subtype) => {
  return {
    type: 'financial_advice',
    content: `📋 **Tax Optimization**\n\n🎯 **Section 80C (₹1.5L limit):**\n• ELSS Mutual Funds\n• PPF contributions\n• Life insurance premiums\n• Principal repayment of home loan\n\n💡 **Other Deductions:**\n• 80D: Health insurance\n• 80E: Education loan interest\n• 80G: Donations`
  };
};

const generateCryptoAdvice = (question, subtype) => {
  return {
    type: 'financial_advice',
    content: `₿ **Cryptocurrency Guidance**\n\n⚠️ **High Risk Investment:**\n• Only invest money you can afford to lose\n• Crypto gains taxed at 30% + cess\n• Extremely volatile - can lose 50%+ value\n• Not recommended for beginners\n\n🎯 **If investing:**\n• Start with Bitcoin/Ethereum only\n• Max 5-10% of total portfolio\n• Use reputable Indian exchanges`
  };
};

const generateCreditAdvice = (question, subtype) => {
  return {
    type: 'financial_advice',
    content: `💳 **Credit Score Management**\n\n🎯 **Improve Credit Score:**\n• Pay all EMIs/bills on time\n• Keep credit utilization below 30%\n• Don't close old credit cards\n• Check credit report regularly\n\n📊 **Score Ranges:**\n• 750+: Excellent (best rates)\n• 650-750: Good\n• Below 650: Needs improvement`
  };
};

const generateGeneralAdvice = (question) => {
  return {
    type: 'financial_advice',
    content: `💼 **Financial Wellness Guide**\n\nI can help you with specific advice on:\n\n🎯 **Investment Topics:**\n• Mutual Funds, SIP, Stocks\n• Retirement Planning\n• Risk Assessment\n\n💰 **Money Management:**\n• Budgeting & Savings\n• Emergency Fund Planning\n• Tax Optimization\n\n🏦 **Financial Products:**\n• Loans & EMI Planning\n• Insurance Coverage\n• Credit Score Improvement\n\n💡 *Ask me specific questions like "How to invest ₹10,000 monthly?" or "Best tax-saving options?"*`
  };
};

// Handle general financial advice queries with enhanced intelligence
const handleGeneralFinancialQuery = (question) => {
  console.log('🧠 Analyzing financial query:', question);
  
  // Analyze the question for better categorization
  const analysis = analyzeFinancialQuery(question);
  console.log('📊 Query analysis result:', analysis);
  
  // Generate dynamic response based on analysis
  const response = generateDynamicResponse(question, analysis);
  console.log('✅ Generated dynamic response for category:', analysis.category);
  
  return response;
};

// Enhanced AI response function with financial model integration
const getFinancialAdvice = async (question) => {
  console.log('🚀 FUNCTION CALLED - getFinancialAdvice');
  console.log('📥 Question received:', question);
  
  try {
    // Check if this is a stock-related query
    const isStockQuery = detectStockQuery(question);
    console.log('🔍 Is stock query?', isStockQuery);
    
    if (isStockQuery.isStock) {
      console.log('📈 Processing stock-related query...');
      return await handleStockQuery(question, isStockQuery.ticker);
    } else {
      console.log('💡 Processing general financial advice query...');
      return handleGeneralFinancialQuery(question);
    }
    
  } catch (error) {
    console.error('❌ Error in getFinancialAdvice:', error);
    
    // Return a hardcoded response if everything fails
    return {
      type: 'financial_prediction',
      content: `📊 **TCS.NS Stock Analysis (Hardcoded)**\n\n` +
              `🎯 **Recommendation:** BUY 💸\n\n` +
              `📈 **Confidence Levels:**\n` +
              `• BUY 💸: 72.3%\n` +
              `• HOLD 🧘‍♂️: 21.4%\n` +
              `• SELL 🚨: 6.3%\n\n` +
              `⚠️ *This is a hardcoded backup response.*`,
      ticker: 'TCS.NS',
      prediction: {
        prediction: "BUY 💸",
        confidence: {
          "BUY 💸": 72.3,
          "HOLD 🧘‍♂️": 21.4,
          "SELL 🚨": 6.3
        }
      }
    };
  }
};

exports.saveChat = async (req, res) => {
  try {
    const { question } = req.body;
    
    console.log('=== SAVE CHAT DEBUG ===');
    console.log('Received question:', question);
    
    // Get AI response with financial model integration
    const aiResponse = await getFinancialAdvice(question);
    
    console.log('AI Response type:', aiResponse.type);
    console.log('AI Response content preview:', aiResponse.content.substring(0, 100) + '...');
    console.log('======================');
    
    const chatData = {
      question: question,
      answer: aiResponse.content,
      type: aiResponse.type || 'general',
      timestamp: new Date()
    };
    
    // Save to database
    const chat = new Chat(chatData);
    await chat.save();
    
    res.status(201).json({ 
      message: "Chat processed successfully", 
      data: {
        question: question,
        answer: aiResponse.content,
        type: aiResponse.type,
        ...(aiResponse.prediction && { prediction: aiResponse.prediction }),
        ...(aiResponse.ticker && { ticker: aiResponse.ticker })
      }
    });
  } catch (err) {
    console.error('Chat save error:', err);
    res.status(500).json({ error: "Error processing chat" });
  }
};

exports.getChats = async (req, res) => {
  try {
    const chats = await Chat.find().sort({ timestamp: -1 });
    res.json(chats);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving chats" });
  }
};
