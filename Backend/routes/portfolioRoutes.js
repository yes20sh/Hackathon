import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import {
  getMyPortfolio,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} from '../controllers/portfolioController.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/me', getMyPortfolio);
router.post('/', createPortfolio);      // Create new portfolio
router.put('/', updatePortfolio);       // Update existing portfolio
router.delete('/', deletePortfolio);

export default router;
