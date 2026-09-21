import mongoose from "mongoose";
import { Document } from "mongoose";

export interface ISkill extends Document {
  name: string;
  category: string;
  imgUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

const skillsSchema = new mongoose.Schema<ISkill>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Frontend",
        "Backend",
        "Database",
        "Languages",
        "Tools",
        "Other",
      ],
    },
    imgUrl: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);
const Skills =
  mongoose.models.Skills || mongoose.model<ISkill>("Skills", skillsSchema);
export default Skills;
