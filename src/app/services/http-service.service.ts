import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Object> {
    return this.http.get('/assets/movies.json');
  }
}
