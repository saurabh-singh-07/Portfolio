import mongoose, { Document } from "mongoose";

interface IEdu extends Document {
  name: string;
  institution: string;
  StartYear: number;
  endYear: number;
  createdAt: Date;
  updatedAt: Date;
}

const EduSchema = new mongoose.Schema<IEdu>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    institution: {
      type: String,
      trim: true,
      required: true,
    },
    StartYear: {
      type: Number,
      trim: true,
      required: true,
    },
    endYear: {
      type: Number,
      trim: true,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

const Educations =
  mongoose.models.Educations || mongoose.model<IEdu>("Educations", EduSchema);

export default Educations;
