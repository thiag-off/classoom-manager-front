import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  readonly ROOT_URL : string = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }
  

  getCourses(){
    return this.http.get<Course[]>(this.ROOT_URL + '/course');
  }

  getCourseById(courseId : number): Observable<Course>{

    return this.http.get<Course>(this.ROOT_URL + '/course/' + courseId)
  }

}
