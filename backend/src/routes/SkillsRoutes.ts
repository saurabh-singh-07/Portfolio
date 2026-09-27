import express from "express";

import {
  createSkill,
  updateSkill,
  deleteSkill,
  GetAllSkills,
  getSkillById,
} from "../controllers/skillsControllers.js";
import protect from "../middleware/protect.js";

const skillRouter = express.Router();

skillRouter.post("/createSkill",protect , createSkill);
skillRouter.get("/getSkills", GetAllSkills);
skillRouter.get("/getSkillById/:id", protect,getSkillById);
skillRouter.put("/updateSkill/:id",protect, updateSkill);
skillRouter.delete("/deleteSkill/:id",protect, deleteSkill);

export default skillRouter;
