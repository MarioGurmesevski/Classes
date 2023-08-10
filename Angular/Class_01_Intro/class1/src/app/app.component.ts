import { Component } from '@angular/core';
import { IPet, PetType } from './interfaces/pet.interface';

@Component({
  selector: 'app-root',
  // template: `<h1>Directly from the component</h1>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [
  //   `
  //     h1 {
  //       color: red;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  title = 'class1';

  pets: IPet[] = [
    {
      id: 1,
      name: 'Milo',
      type: PetType.cat,
      color: 'orange',
      age: 5,
      hasOwner: false,
    },
    {
      id: 2,
      name: 'Galen',
      type: PetType.dog,
      color: 'lightgrey',
      age: 6,
      hasOwner: true,
    },
    {
      id: 3,
      name: 'Max',
      type: PetType.dog,
      color: 'Gold',
      age: 6,
      hasOwner: true,
    },
  ];

  onInputChange(event: any) {
    console.log('input changed', event.target.value);

    this.title = event.target.value;
  }
}
