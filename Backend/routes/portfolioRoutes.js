// routes/portfolioRoutes.js
import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import {
  getMyPortfolio,
  createOrUpdatePortfolio,
  deletePortfolio,
} from '../controllers/portfolioController.js';

const router = express.Router();

// Use auth middleware to protect all below routes
router.use(authMiddleware);

// @route   GET /api/portfolio/me
router.get('/me', getMyPortfolio);

// @route   POST /api/portfolio
router.post('/', createOrUpdatePortfolio);

// @route   DELETE /api/portfolio
router.delete('/', deletePortfolio);

export default router;
