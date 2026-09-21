import express from "express";
import {
  login,
  logoutAdmin,
  register,
  verifyAdmin,
} from "../controllers/adminController.js";

const AdminRouter = express.Router();

AdminRouter.post("/register", register);
AdminRouter.post("/login", login);
AdminRouter.post("/logout", logoutAdmin);
AdminRouter.get("/verify", verifyAdmin);

export default AdminRouter;
