import { Router } from "express";
import CourseController from "../controllers/course.controller.js";

const router = Router();

router.get("/", CourseController.getAllCoutses);

export default router;
