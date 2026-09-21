import mongoose from "mongoose";

export interface IAdmin extends Document {
  name: string;
  password: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const AdminSchema = new mongoose.Schema<IAdmin>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  },
);

const Admin =
  mongoose.models.Admin || mongoose.model<IAdmin>("Admin", AdminSchema);

export default Admin;
