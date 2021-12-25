import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../common/course.service';
import { UdemyResponse } from '../../shared/udemy/course';

@Component({
  selector: 'app-udemy',
  templateUrl: './udemy.component.html',
  styleUrls: ['./udemy.component.css'],
})
export class UdemyComponent implements OnInit {
  constructor(private courseService: CourseService) {}

  response: UdemyResponse = {
    count:0,
    next: '',
    previous: '',
    results: []
  }

  ngOnInit(): void {
    this.courseService._getCourse().subscribe((courses) => {
      this.response = courses;

      console.log(this.response)
    });
  }
}
