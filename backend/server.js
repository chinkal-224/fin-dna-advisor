const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const aiChatRoute = require("./routes/aiChat.route");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/example', require('./routes/example.routes'));
app.use("/api/ai", aiChatRoute);
app.use('/api/test', require('./routes/test.routes'));
app.use('/api/direct', require('./routes/direct-test.routes'));
app.use('/api/chatbot', require('./routes/chatbot.routes'));
app.use('/api/advice', require('./routes/advice.routes'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});