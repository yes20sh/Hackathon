import Feedback from '../models/Feedback.js';

export const submitFeedback = async (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ message: 'Name and message are required.' });
  }

  try {
    const feedback = new Feedback({ name, message });
    await feedback.save();

    res.status(201).json({ message: 'Feedback submitted successfully.', feedback });
  } catch (error) {
    console.error('Submit feedback error:', error);
    res.status(500).json({ message: 'Server error submitting feedback.' });
  }
};

export const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    console.error('Get feedback error:', error);
    res.status(500).json({ message: 'Server error retrieving feedback.' });
  }
};
