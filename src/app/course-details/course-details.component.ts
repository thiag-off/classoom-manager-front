import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../course/course';
import { CourseService } from '../course/course.service';
import {  ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  constructor(private courseService:CourseService, private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.getCourseById();

  }

  course? : Course;

  public getCourseById() : void{
    const courseId = Number(this.route.snapshot.paramMap.get("id"));
    this.courseService.getCourseById(courseId).subscribe((course) => (this.course = course));
  }  

}
