import { Router } from "express";
import StudentController from "../controllers/student.controller.js";
const router = Router();

router.get("/", StudentController.getAllStudents);

export default router;
