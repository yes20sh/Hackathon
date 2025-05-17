import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URL;

  if (!mongoURI) {
    console.error("❌ MONGODB_URL is not defined in .env");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(mongoURI);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
