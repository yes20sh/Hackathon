// Demo code 

import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: '✅ Server is running' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});


// // server.js
// import 'dotenv/config'; // loads .env
// import app from './app.js';
// import connectDB from './config/db.js';

// const PORT = process.env.PORT || 5000;

// try {
//   await connectDB();
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// } catch (error) {
//   console.error('Failed to start server:', error);
//   process.exit(1);
// }

