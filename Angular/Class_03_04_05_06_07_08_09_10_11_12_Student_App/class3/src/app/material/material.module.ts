import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const module = [
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
];

@NgModule({
  declarations: [],
  imports: [...module],
  exports: [...module],
})
export class MaterialModule {}
