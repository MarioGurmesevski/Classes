import express from "express";
import * as studentService from "../services/students.service.js";

const router = express.Router();

router.get("/students", (req, res) => {
  const students = studentService.getStudentsData();
  res.status(200).send(students);
});

router.post("/students", (req, res) => {
  const newStudent = req.body;
  studentService.addStudent(newStudent);
  res.sendStatus(200);
});

router.patch("/students/:id", (req, res) => {
  const body = req.body;
  const id = req.params.id;
  try {
    studentService.updateStudent(id, body);
  } catch (err) {
    console.log(err);
    res.status(404).send({
      message: err,
    });
  }
  res.sendStatus(200);
});

router.delete("/students/:id", (req, res) => {
  const id = req.params.id;

  try {
    studentService.deleteStudent(id);
  } catch (err) {
    res.status(404).send({
      message: err,
    });
  }

  res.sendStatus(200);
});

export default router;
