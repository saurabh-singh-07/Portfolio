import {type Request, type Response } from "express";
import Admin from "../models/Admin.js";
import bcrypt from "bcrypt";
export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
     return res.status(400).json({
        message: "Failed, please enter complate details...",
      });
    }

    const existingAdmin  = await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(400).json({
        Message: "Failed, User is already exited...",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = new Admin({ name, email, password: hashedPassword });
    await newAdmin.save();

    return res.status(201).json({
      message: "Admin created successfully....",
      Admin: {
        _id: newAdmin._id,
        name: newAdmin.name,
        email: newAdmin.email,
      },
    });
  } catch (error: any) {
    console.error(error);
   return res.status(500).json({
      messge: error.messge,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!password || !email) {
      return res.status(400).json({
        message: "failed, please fill all feild...",
      });
    }
    const admin  = await Admin.findOne({ email });
    if (!admin ) {
      return res.status(400).json({
        message: "No admin found, please try again....",
      });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      admin.password,
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Invaild password...",
      });
    }
    req.session.AdminId = admin._id.toString();

    return res.status(200).json({
      message: "login successfully...",
      admin: {
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const logoutAdmin = async (req: Request, res: Response) => {
  req.session.destroy((error: any) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        message: error.message,
      });
  }
  return res.json({ message: "logout successful..." })
});
};

export const verifyAdmin = async (req: Request, res: Response) => {
  try {
    const { AdminId } = req.session;
    if(!AdminId) {
      return res.status(401).json({
        message : "Not authenticated..."
      })
    }
    const admin = await Admin.findById(AdminId).select("-password");

    if (!admin) {
      return res.status(400).json({ message: "Invalid user" });
    }
    return res.status(200).json({ admin });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
