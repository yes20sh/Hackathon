import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Feedback = mongoose.model('Feedback', FeedbackSchema);

export default Feedback;
