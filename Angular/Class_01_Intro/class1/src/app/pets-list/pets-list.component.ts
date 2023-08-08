import { IPet, PetType } from './../interfaces/pet.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
})
export class PetsListComponent {
  pets: IPet[] = [
    {
      id: 1,
      name: 'Boem',
      type: PetType.dog,
      color: 'yellow',
      age: 5,
      hasOwner: true,
    },
    {
      id: 2,
      name: 'Bill',
      type: PetType.cat,
      color: 'black',
      age: 4,
      hasOwner: false,
    },
    {
      id: 3,
      name: 'Max',
      type: PetType.dog,
      color: 'gold',
      age: 9,
      hasOwner: true,
    },
  ];

  inView: string = 'list';

  changeInView(newView: string) {
    console.log(newView);

    this.inView = newView;
  }
}
