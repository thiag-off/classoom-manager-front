import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path:'course',
    component: CourseListComponent

  },

  {
    path: 'student',
    component: StudentListComponent
  },
  {
    path: 'course/:id',
    component: CourseDetailsComponent
  }
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }