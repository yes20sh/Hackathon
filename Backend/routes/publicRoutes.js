// routes/publicRoutes.js
import express from 'express';
import Portfolio from '../models/Portfolio.js';

const router = express.Router();

// @route   GET /api/public/:userId
// @desc    Get public portfolio data for any user by their userId
// @access  Public
router.get('/:userId', async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ user: req.params.userId })
      .populate('user', 'email social');

    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    res.json(portfolio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
