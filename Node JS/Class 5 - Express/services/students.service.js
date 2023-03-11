import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";

// Workaround for __filename and __dirname with ES6 imports
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const studentsDbPath = path.join(__dirname, "..", "db.json");

export const getStudentsData = () => {
  const students = fs.readFileSync(studentsDbPath, { encoding: "utf-8" });

  return JSON.parse(students);
};

export const getStudentById = (id) => {
  const students = getStudentsData();

  const student = students.find((s) => s.id === id);

  if (!student) {
    throw new Error(`Student with id:${id}not found`);
  }

  return student;
};

export const saveStudentsData = (students) => {
  fs.writeFileSync(studentsDbPath, JSON.stringify(students, null, 2));
};

export const addStudent = (student) => {
  const students = getStudentsData();

  console.log(students);

  students.push({
    ...student,
    id: uuidv4(),
  });

  saveStudentsData(students);
};

export const updateStudent = (id, student) => {
  try {
    const students = getStudentsData();
  } catch (err) {
    throw new Error(`User with id:${id}can't be found and updated`);
  }
  const existingStudent = getStudentById(id);

  const index = students.findIndex((s) => s.id === id);

  students[index] = {
    ...students[index],
    ...student,
  };

  saveStudentsData(students);
};

export const deleteStudent = (id) => {
  const student = getStudentById(id);
  const students = getStudentsData();

  const filteredStudents = students.filter((s) => s.id !== id);

  saveStudentsData(filteredStudents);
};
