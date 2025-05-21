import express from 'express';
import Portfolio from '../models/Portfolio.js';
import User from '../models/User.js';

const router = express.Router();

// @route   GET /api/public/:username
// @desc    Get public portfolio data by username
// @access  Public
router.get('/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username }).select('_id fullName email');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const portfolio = await Portfolio.findOne({ user: user._id }).populate('user', 'fullName email');

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
