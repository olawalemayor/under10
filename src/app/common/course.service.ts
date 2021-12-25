import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UdemyResponse } from '../shared/udemy/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private _http: HttpClient) {}

  _getCourse(): Observable<UdemyResponse> {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    //.set('Accept', 'application/json, text/plain, */*')
    //.set(
    //   'Authorization',
    //   'Basic CUhyYnBuWUp2UGg3U1lrU0tSdmxZNTVtT0ljZWdlbW9sTTIzU0hISTY6R0FEb1FPQlVnVVM4YlVKbHhIbEdtYktCcldZalJUa3dQMnliNml5bmZVOXZkc1dqN01PM09EeUdTQ1A1bGJaNzdzeWNXUHJYU0hPOEhZQ0lNODY5a3A4TnE2N3NKd2FudHU5V2YzanRDcm14WWxZSTRtb29GYnd2QjNjVVpyQ2U='
    // )
    // .set('Content-Type', 'application/json;charset=utf-8');
    return this._http.get<UdemyResponse>(
      'https://aqueous-fjord-24538.herokuapp.com/courses',
      {
        headers,
      }
    );
  }
}
