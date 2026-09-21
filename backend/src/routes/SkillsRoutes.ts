import express from "express";

import {
  createSkill,
  updateSkill,
  deleteSkill,
  GetAllSkills,
  getSkillById,
} from "../controllers/skillsControllers.js";

const skillRouter = express.Router();

skillRouter.post("/createSkill", createSkill);
skillRouter.get("/getSkills", GetAllSkills);
skillRouter.get("/getSkillById/:id", getSkillById);
skillRouter.put("/updateSkill/:id", updateSkill);
skillRouter.delete("/deleteSkill/:id", deleteSkill);

export default skillRouter;
