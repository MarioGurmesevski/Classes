import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { StudentListComponent } from './components/students-list/student-list/student-list.component';
import { AverageGradePipe } from './pipes/average-grade.pipe';
import { GradeColorDirective } from './directives/grade-color.directive';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found/not-found.component';
import { TopSectionComponent } from './components/top-section/top-section/top-section.component';
import { StudentDetailsComponent } from './components/student-details/student-details/student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentListComponent,
    AverageGradePipe,
    GradeColorDirective,
    NavbarComponent,
    NotFoundComponent,
    TopSectionComponent,
    StudentDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
