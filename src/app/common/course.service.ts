import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UdemyResponse } from '../shared/udemy/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private _http: HttpClient) {}

  courseCategory: string = '';

  nextRequest: string = '';

  originUrl = 'https://udemy.com';

  headers = new HttpHeaders({
    Accept: 'application/json, text/plain, */*',
    Authorization:
      'Basic YjBpcjI3YlZtdldqWms2NFd2b0hlY3VvWW5oQmZzUkZIS0tpdW52TzppSTRkWUdwSFRBN0lRU3h3OUdmeWg2WGZMQkxlaEdmdWxSbEZGbVcxVElyNjNkQk1VSEpMeVk2M2FWeUE2cE5URklMQ0puV2pJSWNhcDZ5VzNhS3BQWUlWMlREbnFyRkU0dUYxSlI5azFlR2Yxa245N1hOWFhqaWVGZGRhZ3pYTg==',
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  });
  _getNext(): Observable<UdemyResponse> {
    let headers = this.headers;
    return this._http.get<UdemyResponse>(this.nextRequest, {
      headers,
    });
  }

  _getCourse(): Observable<UdemyResponse> {
    let headers = this.headers;
    return this._http.get<UdemyResponse>(`${this.originUrl}/api-2.0/courses`, {
      headers,
    });
  }

  _getFreeCourse(): Observable<UdemyResponse> {
    let headers = this.headers;
    return this._http.get<UdemyResponse>(
      `${this.originUrl}/api-2.0/courses/?price=price-free`,
      {
        headers,
      }
    );
  }

  _getPaidCourse(): Observable<UdemyResponse> {
    let headers = this.headers;
    return this._http.get<UdemyResponse>(
      `${this.originUrl}/api-2.0/courses/?price=price-paid`,
      {
        headers,
      }
    );
  }

  _FilterAllCategory(): Observable<UdemyResponse> {
    let headers = this.headers;
    return this._http.get<UdemyResponse>(
      `${this.originUrl}/api-2.0/courses/?category=${this.courseCategory}`,
      {
        headers,
      }
    );
  }

  _FilterFreeCategory(): Observable<UdemyResponse> {
    let headers = this.headers;
    return this._http.get<UdemyResponse>(
      `${this.originUrl}/api-2.0/courses/?category=${this.courseCategory}&price=price-free`,
      {
        headers,
      }
    );
  }

  _FilterPaidCategory(): Observable<UdemyResponse> {
    let headers = this.headers;
    return this._http.get<UdemyResponse>(
      `${this.originUrl}/api-2.0/courses/?category=${this.courseCategory}&price=price-paid`,
      {
        headers,
      }
    );
  }
}
