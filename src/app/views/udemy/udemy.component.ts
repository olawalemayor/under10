import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../common/course.service';
import { Course } from '../../shared/udemy/course';

@Component({
  selector: 'app-udemy',
  templateUrl: './udemy.component.html',
  styleUrls: ['./udemy.component.css'],
})
export class UdemyComponent implements OnInit {
  constructor(private courseService: CourseService) {}

  courses: Course[] = [];

  ngOnInit(): void {
    this.courseService._getCourse().subscribe((courses) => {
      this.courses = courses;
    });
  }
}
