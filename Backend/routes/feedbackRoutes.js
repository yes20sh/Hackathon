import express from 'express';
import { submitFeedback, getAllFeedback } from '../controllers/feedbackController.js';

const router = express.Router();

router.post('/', submitFeedback);  // Submit feedback
router.get('/', getAllFeedback);   // Get all feedback

export default router;
