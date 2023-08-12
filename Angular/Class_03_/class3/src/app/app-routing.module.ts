import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { StudentListComponent } from './components/students-list/student-list/student-list.component';
import { NotFoundComponent } from './components/not-found/not-found/not-found.component';
import { StudentDetailsComponent } from './components/student-details/student-details/student-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'students/:id', component: StudentDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
