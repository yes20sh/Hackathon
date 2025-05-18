// routes/authRoutes.js
import express from 'express';
import { signup, signin } from '../controllers/authController.js';

const router = express.Router();

// @route   POST /api/auth/signup
router.post('/signup', signup);

// @route   POST /api/auth/signin
router.post('/signin', signin);

export default router;
