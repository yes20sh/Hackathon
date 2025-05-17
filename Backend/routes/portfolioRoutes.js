// routes/portfolioRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const {
  getMyPortfolio,
  createOrUpdatePortfolio,
  deletePortfolio,
} = require('../controllers/portfolioController');

// Use auth middleware to protect all below routes
router.use(authMiddleware);

// @route   GET /api/portfolio/me
router.get('/me', getMyPortfolio);

// @route   POST /api/portfolio
router.post('/', createOrUpdatePortfolio);

// @route   DELETE /api/portfolio
router.delete('/', deletePortfolio);

module.exports = router;
