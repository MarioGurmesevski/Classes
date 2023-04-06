import Student from "../models/student.model.js";
import Course from "../models/course.model.js";

export default class StudentService {
  static async getAllStudents() {
    const students = await Student.find({});

    return students;
  }

  static async getStudentById(studentId) {
    const student = await Student.findById(studentId).lean();
    const course = await Course.findById(student.courseId).lean();

    const fullStudent = {
      ...student,
      course,
    };

    return fullStudent;
  }

  static async addNewStudent(studentData) {
    // Preparing & validating data
    const student = new Student(studentData);

    // Adding data to Mongo DB
    const response = await student.save();

    // Returing back to controller
    return response;
  }

  static async updateStudent(studentId, updateData) {
    const student = await Student.findById(studentId);

    if (!student) throw new Error(`Student with ID:${studentId} doesn't exist!`);

    const keys = Object.keys(student);

    console.log(updateData);

    keys.forEach((key) => {
      if (key !== "_id" && key !== "__v") {
        student[key] = updateData[key];
      }
    });

    const updatedStudent = await student.save();

    return updatedStudent;
  }

  static async deleteStudent(studentId) {
    await Student.findByIdAndDelete(studentId);
  }
}
