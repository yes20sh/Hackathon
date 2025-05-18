// models/Portfolio.js
import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  techStack: [String],
});

const ExperienceSchema = new mongoose.Schema({
  title: String,
  company: String,
  from: Date,
  to: Date,
  current: Boolean,
  description: String,
});

const AccomplishmentSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
});

const PortfolioSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    about: {
      type: String,
    },
    projects: [ProjectSchema],
    experience: [ExperienceSchema],
    accomplishments: [AccomplishmentSchema],
    social: {
      linkedin: String,
      twitter: String,
      github: String,
      facebook: String,
      instagram: String,
    },
    images: [String], // URLs or paths to portfolio images
  },
  { timestamps: true }
);

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

export default Portfolio;
