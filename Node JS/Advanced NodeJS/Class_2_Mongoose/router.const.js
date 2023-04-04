import { Router } from "express";
import studentRoutes from "./routes/student.routes.js";
import courseRoutes from "./routes/courses.routes.js";

const router = Router();

router.use("/students", studentRoutes);
router.use("/courses", courseRoutes);

export default router;
