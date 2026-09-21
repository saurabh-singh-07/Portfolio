import mongoose, { Document } from "mongoose";
import { describe } from "node:test";

interface IProject extends Document {
  name: string;
  description: string;
  liveLink: string;
  githubLink: string;
  imgUrl: string;
  skills: string[];
}
const ProjectSchema = new mongoose.Schema<IProject>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    liveLink: {
      type: String,
      trim: true,
      required: true,
    },
    githubLink: {
      type: String,
      trim: true,
      required: true,
    },
    imgUrl: {
      type: String,
      trim: true,
      required: true,
    },
    skills: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);
export const Project =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);
