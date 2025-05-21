import mongoose from 'mongoose';

// Projects
const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  sourceCode: { type: String, default: '', trim: true },
  view: { type: String, default: '', trim: true },
  skills: { type: [String], required: true },
});

// Experience — now with multiple description points
const ExperienceSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  company: { type: String, required: true, trim: true },
  from: { type: Date, required: true },
  to: { type: Date },
  current: { type: Boolean, default: false },
  description: { type: [String], default: [], trim: true }, // ✅ changed to array of strings
});

// Education
const EducationSchema = new mongoose.Schema({
  degree: { type: String, required: true, trim: true },
  institute: { type: String, required: true, trim: true },
  marks: { type: String, trim: true },
  from: { type: Date, required: true },
  to: { type: Date },
  current: { type: Boolean, default: false },
});

// Accomplishments
const AccomplishmentSchema = new mongoose.Schema({
  description: { type: String, trim: true },
});

// Social (allow expansion)
const SocialSchema = new mongoose.Schema({
  linkedin: { type: String, trim: true },
  twitter: { type: String, trim: true },
  github: { type: String, trim: true },
  facebook: { type: String, trim: true },
  instagram: { type: String, trim: true },
}, { _id: false });

const PortfolioSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  about: { type: String, trim: true },
  skills: { type: [String], required: true },

  // Nested arrays
  projects: [ProjectSchema],
  experience: [ExperienceSchema],
  education: [EducationSchema],
  accomplishments: [AccomplishmentSchema],

  social: SocialSchema, // ✅ structured object
  images: [String], // image URLs or paths
}, { timestamps: true });

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

export default Portfolio;
