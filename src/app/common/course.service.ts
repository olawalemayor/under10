import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../shared';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private _http: HttpClient) {}

  _getCourse(): Observable<Course[]> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json, text/plain, */*')
      .set(
        'Authorization',
        'Basic CUhyYnBuWUp2UGg3U1lrU0tSdmxZNTVtT0ljZWdlbW9sTTIzU0hISTY6R0FEb1FPQlVnVVM4YlVKbHhIbEdtYktCcldZalJUa3dQMnliNml5bmZVOXZkc1dqN01PM09EeUdTQ1A1bGJaNzdzeWNXUHJYU0hPOEhZQ0lNODY5a3A4TnE2N3NKd2FudHU5V2YzanRDcm14WWxZSTRtb29GYnd2QjNjVVpyQ2U='
      )
      .set('Content-Type', 'application/json;charset=utf-8');
    return this._http.get<Course[]>('https://udemy.com/api-2.0/courses', {
      headers,
    });
  }
}
