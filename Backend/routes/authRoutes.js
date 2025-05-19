// routes/authRoutes.js
import express from 'express';
import { signup, signin, logout } from '../controllers/authController.js';

const router = express.Router();

// @route   POST /api/auth/signup
router.post('/signup', signup);

// @route   POST /api/auth/signin
router.post('/signin', signin);

// @route   POST /api/auth/logout
router.post('/logout', logout);

export default router;
