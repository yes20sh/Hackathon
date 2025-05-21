import Portfolio from '../models/Portfolio.js';

// @desc    Get current user's portfolio
// @route   GET /api/portfolio/me
// @access  Private
export const getMyPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ user: req.user.id }).populate('user', 'fullName email');
    if (!portfolio) return res.status(404).json({ message: 'Portfolio not found' });

    res.json(portfolio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Helper to format accomplishments
const formatAccomplishments = (accomplishments) => {
  return accomplishments.map(item => {
    if (typeof item === 'string') return { description: item };
    if (item && typeof item === 'object' && item.description) return item;
    return null;
  }).filter(Boolean);
};

// Helper to format experience descriptions as strings
const formatExperience = (experience) => {
  return experience.map(exp => ({
    ...exp,
    description: Array.isArray(exp.description)
      ? exp.description.join('\n')
      : typeof exp.description === 'string'
        ? exp.description
        : '',
  }));
};

// @desc    Create user's portfolio
// @route   POST /api/portfolio
// @access  Private
export const createPortfolio = async (req, res) => {
  const {
    about,
    skills = [],
    projects = [],
    experience = [],
    education = [],
    accomplishments = [],
    social = {},
    images = [],
  } = req.body;

  try {
    const existingPortfolio = await Portfolio.findOne({ user: req.user.id });
    if (existingPortfolio) {
      return res.status(400).json({ message: 'Portfolio already exists. Use update endpoint.' });
    }

    const portfolioFields = {
      user: req.user.id,
      about,
      skills,
      projects,
      experience: formatExperience(experience),
      education,
      accomplishments: formatAccomplishments(accomplishments),
      social: typeof social === 'object' && social !== null ? social : {},
      images,
    };

    const portfolio = new Portfolio(portfolioFields);
    await portfolio.save();
    res.status(201).json(portfolio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update user's portfolio
// @route   PUT /api/portfolio
// @access  Private
export const updatePortfolio = async (req, res) => {
  const {
    about,
    skills = [],
    projects = [],
    experience = [],
    education = [],
    accomplishments = [],
    social = {},
    images = [],
  } = req.body;

  try {
    const portfolioFields = {
      about,
      skills,
      projects,
      experience: formatExperience(experience),
      education,
      accomplishments: formatAccomplishments(accomplishments),
      social: typeof social === 'object' && social !== null ? social : {},
      images,
    };

    let portfolio = await Portfolio.findOne({ user: req.user.id });
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found. Use create endpoint.' });
    }

    portfolio = await Portfolio.findOneAndUpdate(
      { user: req.user.id },
      { $set: portfolioFields },
      { new: true, runValidators: true }
    );

    res.json(portfolio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete portfolio
// @route   DELETE /api/portfolio
// @access  Private
export const deletePortfolio = async (req, res) => {
  try {
    await Portfolio.findOneAndDelete({ user: req.user.id });
    res.json({ message: 'Portfolio deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
