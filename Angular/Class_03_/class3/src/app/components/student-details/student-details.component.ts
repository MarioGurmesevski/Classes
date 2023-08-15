import { StudentsService } from './../../services/students.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcademyTypeEnum } from 'src/app/interfaces/academy-type.enum';
import { Student } from 'src/app/interfaces/student.interface';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  student: Student | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private studentsService: StudentsService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    console.log('id', id);

    this.student = this.studentsService.getStudentById(Number(id));
  }
  goBack() {
    this.location.back();
  }
}
