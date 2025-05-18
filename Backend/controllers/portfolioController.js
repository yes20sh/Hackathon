import Portfolio from '../models/Portfolio.js';

// @desc    Get current user's portfolio
// @route   GET /api/portfolio/me
// @access  Private
export const getMyPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ user: req.user.id });
    if (!portfolio) return res.status(404).json({ message: 'Portfolio not found' });

    res.json(portfolio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create or update user's portfolio
// @route   POST /api/portfolio
// @access  Private
export const createOrUpdatePortfolio = async (req, res) => {
  const {
    about,
    projects,
    experience,
    accomplishments,
    social,
    images,
  } = req.body;

  // Ensure accomplishments is an array of objects with at least a 'title' field
  const formattedAccomplishments = Array.isArray(accomplishments)
    ? accomplishments.map(item => {
        if (typeof item === 'string') {
          // Convert string to object with title only
          return { title: item };
        } else if (typeof item === 'object' && item !== null) {
          // Already an object, pass as is
          return item;
        }
        // Fallback: skip invalid entries
        return null;
      }).filter(Boolean) // Remove any null entries
    : [];

  const portfolioFields = {
    user: req.user.id,
    about,
    projects,
    experience,
    accomplishments: formattedAccomplishments,
    social,
    images,
  };

  try {
    let portfolio = await Portfolio.findOne({ user: req.user.id });

    if (portfolio) {
      // Update
      portfolio = await Portfolio.findOneAndUpdate(
        { user: req.user.id },
        { $set: portfolioFields },
        { new: true }
      );
      return res.json(portfolio);
    }

    // Create
    portfolio = new Portfolio(portfolioFields);
    await portfolio.save();
    res.json(portfolio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete portfolio (optional)
// @route   DELETE /api/portfolio
// @access  Private
export const deletePortfolio = async (req, res) => {
  try {
    await Portfolio.findOneAndRemove({ user: req.user.id });
    res.json({ message: 'Portfolio deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
