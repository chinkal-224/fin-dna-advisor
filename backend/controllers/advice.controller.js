const Advice = require('../models/advice.model');

exports.addAdvice = async (req, res) => {
  try {
    const advice = new Advice(req.body);
    await advice.save();
    res.status(201).json({ message: "Advice added", advice });
  } catch (err) {
    res.status(500).json({ error: "Error adding advice" });
  }
};

exports.getAllAdvice = async (req, res) => {
  const all = await Advice.find();
  res.json(all);
};
