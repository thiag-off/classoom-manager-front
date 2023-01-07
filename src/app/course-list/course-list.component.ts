import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../course/course';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

 

  ngOnInit(): void {
  }
  readonly ROOT_URL : string = 'http://localhost:8080/api/v1';

  courses!: Observable<Course[]>;
  

  constructor(private http : HttpClient){}

  getCourses(){
    this.courses = this.http.get<Course[]>(this.ROOT_URL + '/course');
  }

  getLectures(){

  }
}
