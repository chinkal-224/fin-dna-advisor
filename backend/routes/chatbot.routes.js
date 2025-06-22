const express = require("express");
const router = express.Router();
const chatbotController = require('../controllers/chatbot.controller');

// POST: Save chat (with enhanced AI integration)
router.post("/save", chatbotController.saveChat);

// GET: Get all chats
router.get("/", chatbotController.getChats);

module.exports = router;
