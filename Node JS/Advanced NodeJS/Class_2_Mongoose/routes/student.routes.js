import { Router } from "express";
import StudentController from "../controllers/student.controller.js";
const router = Router();

router.get("/", StudentController.getAllStudents);

router.post("/", StudentController.addNewStudent);

router.put("/:id", StudentController.updateStudent);

router.delete("/:id", StudentController.deleteStudent);

export default router;
