/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  public students = [
    {
      id: 'soafgsa',
      name: 'John Doe',
      age: 50,
      track: 'NET',
      IsMale: true,
    },
    {
      id: 'fasfsf',
      name: 'Jfafs Doe',
      age: 24,
      track: 'JS',
      gender: 'F',
      IsMale: false,
    },
  ];

  getStudents() {
    return this.students;
  }

  getStudent(id: string) {
    return this.students.find((student) => student.id === id);
  }

  createStudent(student: any) {
    this.students.push(student);
  }

  updateStudent(updatedStudentData: any, studentId: string) {
    const index = this.students.findIndex(
      (student) => student.id === studentId,
    );

    this.students[index] = { ...updatedStudentData, id: studentId };
  }

  deleteStudent(id: string) {
    this.students = this.students.filter((student) => student.id !== id);
  }
}
