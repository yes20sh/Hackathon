// app.js
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import errorMiddleware from './middlewares/errorMiddleware.js';

import authRoutes from './routes/authRoutes.js';
import portfolioRoutes from './routes/portfolioRoutes.js';
import publicRoutes from './routes/publicRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js' // <-- assumes `export default`


const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON body
app.use(morgan('dev')); // logging

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/public', publicRoutes);
app.use('/api/feedback', feedbackRoutes)

// Error handling middleware (should be last)
app.use(errorMiddleware);

export default app;
