const express = require("express");
const router = express.Router();
// Assume AI model is exportable as a function
const getAIResponse = require("../ai/index"); // your model file

router.post("/chat", async (req, res) => {
  const { question } = req.body;
  try {
    const answer = await getAIResponse(question); // use model
    res.json({ question, answer });
  } catch (error) {
    res.status(500).json({ error: "AI failed to respond" });
  }
});

module.exports = router;
