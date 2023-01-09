import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../course/course';
import { CourseService } from '../course/course.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

 

  ngOnInit(): void {

    this.getCourses();

  }
 

  constructor(private courseService : CourseService){}

  courses!: Observable<Course[]>;

  getCourses(){
    this.courses = this.courseService.getCourses();
  }
}
