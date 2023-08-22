import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../interfaces/student.interface';
import { Location } from '@angular/common';
import { StudentsService } from '../../services/students.service';
import { map, mergeMap, Subscription } from 'rxjs';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  student: Student | undefined;
  subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private studentsService: StudentsService
  ) {}

  ngOnInit() {
    // let id: string = this.route.snapshot.params['id'];

    // let id: number = 0;
    // this.route.params.subscribe((params) => {
    //   id = Number(params['id']);

    //   this.studentsService.students$.subscribe((students) => {
    //     const student = students.find((s) => s.id === id);
    //   });
    // });

    this.subscription = this.route.params
      .pipe(
        map((params) => Number(params['id'])),
        mergeMap((id) =>
          this.studentsService.students$.pipe(
            map((students) => students.find((s) => s.id === id))
          )
        )
      )
      .subscribe((student) => {
        this.student = student;
      });
  }

  goBack() {
    this.location.back(); // mimics the browser back button behavior
  }
  ngDestroy() {
    this.subscription.unsubscribe();
  }
}
