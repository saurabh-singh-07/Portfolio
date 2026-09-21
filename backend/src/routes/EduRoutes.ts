import express from "express";
import {
  CreateEdu,
  deleteEdu,
  getEducations,
  updateEdu,
} from "../controllers/EduControllers.js";

const EduRouter = express.Router();

EduRouter.post("/createEducation", CreateEdu);
EduRouter.get("/getEducation", getEducations);
EduRouter.put("/updateEducation/:id", updateEdu);
EduRouter.delete("/deleteEducation/:id", deleteEdu);

export default EduRouter;
