import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';

  readonly ROOT_URL : string = 'http://localhost:8080/api/v1';

  courses!: Observable<Course[]>;
  

  constructor(private http : HttpClient){}

  getCourses(){
    this.courses = this.http.get<Course[]>(this.ROOT_URL + '/course');
  }

  getLectures(){

  }
}
 