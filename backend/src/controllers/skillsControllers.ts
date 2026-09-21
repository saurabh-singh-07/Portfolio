import { Request, Response } from "express";
import Skills from "../models/skillModel.js";

export const createSkill = async (req: Request, res: Response) => {
  try {
    const { name, category, imgUrl } = req.body;

    if (!name || !category || !imgUrl) {
      return res.status(400).json({
        message: "failed, please enter complate details...",
      });
    }

    const existingSkills = await Skills.findOne({ name });

    if (existingSkills) {
      return res.status(400).json({
        message: "Failed, Skill is already exited...",
      });
    }

    const newSkill = new Skills({ name, category, imgUrl });
    await newSkill.save();

    return res.status(201).json({
      message: "skill add successfully...",
      newSkill: {
        _id: newSkill._id,
        name: newSkill.name,
        category: newSkill.category,
      },
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const GetAllSkills = async (req: Request, res: Response) => {
  try {
    const skills = await Skills.find({}).sort({ createdAt: -1 });

    return res.status(200).json({
      message: "success...",
      count: skills.length,
      data: skills,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getSkillById = async (req:Request, res: Response) => {
  try {
    const {id} = req.params;

    const skill = await Skills.findById(id);

    if(!skill){
      return res.status(404).json({
        message : "skill not found...",
      })
    }

    return res.status(200).json({
      message : "Skill fetched successfully...",
      data : skill
    })
  } catch (error : any) {
    console.error(error);
    return res.status(500).json({
      message : "failed to fetch skill...",
      error : error.message
    })
  }
}
export const updateSkill = async (req: Request, res: Response) => {
  try {
    const skill = await Skills.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after"

    });

    if (!skill) {
      return res.status(404).json({
        message: "Skill not found...",
      });
    }
    return res.status(200).json({
      message: "Skill updated successfully...",
      skill: skill,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteSkill = async (req: Request, res: Response) => {
  try {
    const skill = await Skills.findByIdAndDelete(req.params.id);

    if (!skill) {
      return res.status(404).json({
        message: "skill not found...",
      });
    }

    return res.status(200).json({
      message: "skils deleted successfully...",
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
