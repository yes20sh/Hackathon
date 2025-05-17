// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { signup, signin } = require('../controllers/authController');

// @route   POST /api/auth/signup
router.post('/signup', signup);

// @route   POST /api/auth/signin
router.post('/signin', signin);

module.exports = router;
