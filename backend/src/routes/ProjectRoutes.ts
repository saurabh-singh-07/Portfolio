import express  from "express"
import { createProject, deleteProject, getProjects,getProjectById, updateProject } from "../controllers/projectController.js";
import { upload } from "../middleware/upload.middleware.js";
import protect from "../middleware/protect.js";

const ProjectRouter = express.Router();

ProjectRouter.post("/",protect, upload.single("image"), createProject);
ProjectRouter.get("/getProject",getProjects);
ProjectRouter.get("/getProjectById/:id",protect, getProjectById)
ProjectRouter.put("/updateProject/:id",protect,upload.single("image"), updateProject);
ProjectRouter.delete("/deleteProject/:id",protect, deleteProject);
export default ProjectRouter;