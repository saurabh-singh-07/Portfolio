import express from "express";
import {CreateEdu,deleteEdu,getEducations,updateEdu,} from "../controllers/EduControllers.js";
import protect from "../middleware/protect.js";

const EduRouter = express.Router();

EduRouter.post("/createEducation",protect, CreateEdu);
EduRouter.get("/getEducation", getEducations);
EduRouter.put("/updateEducation/:id",protect, updateEdu);
EduRouter.delete("/deleteEducation/:id",protect, deleteEdu);

export default EduRouter;
