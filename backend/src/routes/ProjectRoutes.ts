import express  from "express"
import { createProject, deleteProject, getProjects,getProjectById, updateProject } from "../controllers/projectController.js";
import { upload } from "../middleware/upload.middleware.js";

const ProjectRouter = express.Router();

ProjectRouter.post("/", upload.single("image"), createProject);
ProjectRouter.get("/getProject", getProjects);
ProjectRouter.get("/getProjectById/:id", getProjectById)
ProjectRouter.put("/updateProject/:id",upload.single("image"), updateProject);
ProjectRouter.delete("/deleteProject/:id", deleteProject);
export default ProjectRouter;