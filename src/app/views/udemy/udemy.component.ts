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
    count: 0,
    next: '',
    previous: '',
    results: [],
  };

  nextResponse: UdemyResponse = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  };

  categories: string[] = [
    'Business',
    'Design',
    'Development',
    'IT & Software',
    'Photography & Video',
  ];

  priceFilter(x: UdemyResponse) {
    return x.results.filter((course) => course.price_detail.amount <= 5000);
  }

  cat0() {
    this.courseService.courseCategory = this.categories[0];
    this.courseService._FilterPaidCategory().subscribe((courses) => {
      let filteredResult = this.priceFilter(courses);
      this.response.results = filteredResult;
    });
  }
  cat1() {
    this.courseService.courseCategory = this.categories[1];
    this.courseService._FilterPaidCategory().subscribe((courses) => {
      let filteredResult = this.priceFilter(courses);
      this.response.results = filteredResult;
    });
  }
  cat2() {
    this.courseService.courseCategory = this.categories[2];
    this.courseService._FilterPaidCategory().subscribe((courses) => {
      let filteredResult = this.priceFilter(courses);
      this.response.results = filteredResult;
    });
  }
  cat3() {
    this.courseService.courseCategory = this.categories[3];
    this.courseService._FilterPaidCategory().subscribe((courses) => {
      let filteredResult = this.priceFilter(courses);
      this.response.results = filteredResult;
    });
  }
  cat4() {
    this.courseService.courseCategory = this.categories[4];
    this.courseService._FilterPaidCategory().subscribe((courses) => {
      let filteredResult = this.priceFilter(courses);
      this.response.results = filteredResult;
    });
  }

  freeTab() {
    this.courseService._getFreeCourse().subscribe((courses) => {
      this.response = courses;
    });
  }

  ngOnInit(): void {
    this.freeTab();
  }
}
