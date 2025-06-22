const express = require('express');
const router = express.Router();
const { addAdvice, getAllAdvice } = require('../controllers/advice.controller');

router.post('/add', addAdvice);
router.get('/all', getAllAdvice);

module.exports = router;
