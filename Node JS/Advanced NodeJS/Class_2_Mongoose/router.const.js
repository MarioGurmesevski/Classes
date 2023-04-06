import { Router } from "express";
import studentRoutes from "./routes/student.routes.js";
import courseRoutes from "./routes/courses.routes.js";

const router = Router();

// Courses routes
router.use("/courses", courseRoutes);

// Student routes
router.use("/students", studentRoutes);

export default router;
