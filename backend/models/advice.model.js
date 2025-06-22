const mongoose = require('mongoose');

const AdviceSchema = new mongoose.Schema({
  title: String,
  category: String,
  description: String
});

module.exports = mongoose.model("Advice", AdviceSchema);
