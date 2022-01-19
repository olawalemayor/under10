import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UdemyResponse } from '../shared/udemy/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private _http: HttpClient) {}

  courseCategory: string = '';

  page = 1;

  pageSize = 12;

  nextRequest: string = '';

  //baseURL = 'https://www.udemy.com/api-2.0/courses/';
  baseURL = 'http://demo3793272.mockable.io';

  header = new HttpHeaders({
    Accept: 'application/json, text/plain, */*',
    Authorization:
      'Basic YjBpcjI3YlZtdldqWms2NFd2b0hlY3VvWW5oQmZzUkZIS0tpdW52TzppSTRkWUdwSFRBN0lRU3h3OUdmeWg2WGZMQkxlaEdmdWxSbEZGbVcxVElyNjNkQk1VSEpMeVk2M2FWeUE2cE5URklMQ0puV2pJSWNhcDZ5VzNhS3BQWUlWMlREbnFyRkU0dUYxSlI5azFlR2Yxa245N1hOWFhqaWVGZGRhZ3pYTg==',
  }).set('content-type', 'application/json');

  reqOptions = {
    headers: this.header,
    resoponseType: 'json',
  };

  _getCourse(): Observable<UdemyResponse> {
    return this._http.get<UdemyResponse>(
      `${this.baseURL}/api-2.0/courses`,
      this.reqOptions
    );
  }

  _getFreeCourse(): Observable<UdemyResponse> {
    return this._http.get<UdemyResponse>(
      this.baseURL + `?price=price-free`,
      this.reqOptions
    );
  }

  // _getPaidCourse(): Observable<UdemyResponse> {
  //   //let headers = this.headers;
  //   return this._http.get<UdemyResponse>(
  //     `../../assets/temp/free.json`,{}
  //   );
  // }

  // _FilterAllCategory(): Observable<UdemyResponse> {
  //   //let headers = this.headers;
  //   return this._http.get<UdemyResponse>(`../../assets/temp/free.json`, {});
  // }

  // _FilterFreeCategory(): Observable<UdemyResponse> {
  //   //let headers = this.headers;
  //   return this._http.get<UdemyResponse>(`../../assets/temp/free.json`, {});
  // }

  _FilterPaidCategory(): Observable<UdemyResponse> {
    return this._http.get<UdemyResponse>(
      this.baseURL +
        `?category=${this.courseCategory}&page=${this.page}&page_size=${this.pageSize}&price=price-paid`,
      this.reqOptions
    );
  }
}
