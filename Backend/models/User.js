// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    // Optional: social media links stored here if you want
    social: {
      linkedin: { type: String },
      twitter: { type: String },
      github: { type: String },
      facebook: { type: String },
      instagram: { type: String },
      // Add others as needed
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

export default User;
