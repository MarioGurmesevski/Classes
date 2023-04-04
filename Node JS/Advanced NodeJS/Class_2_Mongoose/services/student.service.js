import Student from "../models/student.model.js";

export default class StudentService {
  static async getAllStudents() {
    const students = await Student.find({});

    return students;
  }
  static async addNewStudent(studentData) {
    const student = new Student(studentData);
    const response = await student.save();

    return response;
  }
  static async updateStudent(studentId, updateData) {
    const student = await Student.findById(studentId);

    if (!student) throw new Error(`Student with ID:${studentId} doesn't exist `);

    const keys = Object.keys(updateData);
    keys.forEach((key) => {
      if (key !== "_id" && key !== "__v") student[key] = updateData[key];
    });

    const updatedStudent = await student.save();

    return updatedStudent;
  }
  static async deleteStudent(studentId) {
    await Student.findByIdAndDelete(studentId);
  }
}
