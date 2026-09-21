import express, { Request, Response } from "express";
import Educations from "../models/eduModel.js";

export const CreateEdu = async (req: Request, res: Response) => {
  try {
    const { name, institution, StartYear, endYear } = req.body;

    if (!name || !institution || !StartYear || !endYear) {
      return res.status(400).json({
        message: "Please enter complate details...",
      });
    }

    const existingEdu = await Educations.findOne({ name });

    if (existingEdu) {
      return res.status(400).json({
        message: "This education is already added...",
      });
    }

    const newEdu = new Educations({ name, institution, StartYear, endYear });
    newEdu.save();

    return res.status(201).json({
      message: "successfully added...",
      data: {
        id: newEdu._id,
        name: newEdu.name,
        institution: newEdu.institution,
        StartYear: newEdu.StartYear,
        endYear: newEdu.endYear,
      },
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getEducations = async (req: Request, res: Response) => {
  try {
    const educations = await Educations.find({}).sort({ createdAt: -1 });

    return res.status(200).json({
      message: "data successfully fetch...",
      count: educations.length,
      data: [educations],
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteEdu = async (req: Request, res: Response) => {
  try {
    const Edu = await Educations.findByIdAndDelete(req.params.id);

    if (!Edu) {
      return res.status(404).json({
        message: "Education Not found...",
      });
    }

    return res.status(200).json({
      message: "successfully deleted...",
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const updateEdu = async (req: Request, res: Response) => {
  try {
    const Edu = await Educations.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: "after"
   });

    if (!Edu) {
      return res.status(404).json({
        message: "data not found...",
      });
    }

    return res.status(200).json({
      message: "data updated successfully...",
      data: Edu,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
