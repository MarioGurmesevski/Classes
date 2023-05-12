/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  getStudents() {
    return [
      {
        id: 'soafgsa',
        name: 'John Doe',
        age: 50,
        track: 'NET',
      },
    ];
  }
}
