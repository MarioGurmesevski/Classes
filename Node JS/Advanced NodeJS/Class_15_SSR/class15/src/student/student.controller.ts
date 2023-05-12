/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Redirect,
  Render,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  @Render('student/student-list')
  async getStudents() {
    const students = this.studentService.getStudents();

    return { students };
  }

  @Get('add-student')
  @Render('student/add-student')
  getAddStudentForm() {
    return {};
  }

  @Get('update-student/:id')
  @Render('student/update-student')
  getUpdateStudentForm(@Param('id') id: string) {
    const student = this.studentService.getStudent(id);

    return student;
  }

  @Get(':id')
  @Render('student/student-details')
  getStudent(@Param('id') id: string) {
    const student = this.studentService.getStudent(id);

    return student;
  }

  @Post()
  @Redirect('/student')
  createStudent(@Body() body: any) {
    return this.studentService.createStudent(body);
  }

  @Post('update-student/:id')
  @Redirect('/student')
  updateStudent(@Body() body: any, @Param('id') id: string) {
    return this.studentService.updateStudent(body, id);
  }
}
