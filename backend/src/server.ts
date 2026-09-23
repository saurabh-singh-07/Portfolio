import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import session from "express-session";
import connectMongo from "connect-mongo";
import connectDB from "./config/db.js";
import AdminRouter from "./routes/AdminRoutes.js";
import skillRouter from "./routes/SkillsRoutes.js";
import EduRouter from "./routes/EduRoutes.js";
import ContactRouter from "./routes/ContactRoutes.js";
import ProjectRouter from "./routes/ProjectRoutes.js";
const MongoStore = (connectMongo as any).default || connectMongo;

declare module "express-session" {
  interface SessionData {
    isLoggedIn: boolean;
    AdminId: string;
  }
}

connectDB();
const app = express();
app.set("trust proxy", 1);

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      path: "/",
    },
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URL as string,
      collectionName: "sessions",
    }),
  }),
);
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/api/Admin", AdminRouter);
app.use("/api/Skill", skillRouter);
app.use("/api/Education", EduRouter);
app.use("/api/Contact", ContactRouter);
app.use("/api/Project", ProjectRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("server is live...");
});

export default app;