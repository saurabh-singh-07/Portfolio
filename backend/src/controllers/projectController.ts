import { Request, Response } from "express";
import { Project } from "../models/ProjectModel.js";
import cloudinary from "../config/cloudinary.js";
import { upload } from "../middleware/upload.middleware.js";
import { uploadToCloudinary } from "../services/cloudinary.service.js";

export const createProject = async (req: Request, res: Response) => {
  try {
    const {name , description, liveLink, githubLink, skills} = req.body;

    if(!name || !description || !liveLink || !githubLink || !skills){
        return res.status(400).json({
            message : "please complate all the details..."
        })
    }
     if (!req.file) {
      return res.status(400).json({
        message: "Project image is required",
      });
    }

    let imageUrl = await uploadToCloudinary(req.file);
    
    const project = await Project.create({
        name ,
        description,
        liveLink,
        githubLink,
        imgUrl : imageUrl,
        skills : Array.isArray(skills) ? skills :[],
    })

    project.save();
    return res.status(201).json({
        message : "Project successfully created...",
        project,
    })
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getProjectById = async (req : Request , res: Response) => {
  try {
    const {id} = req.params;

    const project = await Project.findById(id);
    if(!project) {
      return res.status(404).json({
        message : "project not found..."
      })
    }

    return res.status(200).json({
      message : "project fetch successfully..",
      data : project
    })
  } catch (error : any) {
    return res.status(500).json({
      message : "feiled to fetch project..",
      error : error.message
    })
  }
}
export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: projects.length,
      projects,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
    });
  }
};

export const updateProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const {
      name,
      description,
      liveLink,
      githubLink,
      skills,
    } = req.body;

    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // Update image if a new image is provided
    if (req.file) {
      const imageUrl = await uploadToCloudinary(req.file);

      project.imgUrl = imageUrl;
    }

    // Update text fields only if provided
    if (name !== undefined) {
      project.name = name;
    }

    if (description !== undefined) {
      project.description = description;
    }

    if (liveLink !== undefined) {
      project.liveLink = liveLink;
    }

    if (githubLink !== undefined) {
      project.githubLink = githubLink;
    }

    if (skills !== undefined) {
      project.skills = Array.isArray(skills)
        ? skills
        : skills.split(",").map((skill: string) => skill.trim());
    }

    await project.save();

    return res.status(200).json({
      success: true,
      message: "Project updated successfully",
      project,
    });

  } catch (error: any) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    await Project.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete project",
    });
  }
};
