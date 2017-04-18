import { RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { MoviesResponse, MovSearchParams, Movie } from '../core/api';
export { ApiService, MoviesResponse, MovSearchParams, Movie } from '../core/api';

@Injectable()
export class ApiServiceStub {

  private _response: any;
  private subject = new BehaviorSubject(this.testResponse);
  response = this.subject.asObservable();

  get testResponse() { return this._response; }
  set testResponse(response: any) {
    this._response = response;
    this.subject.next(response);
  }

  searchMovies(_params: MovSearchParams): Observable<MoviesResponse> {
    return this.response;
  }

  getMovie(id: number): Observable<Movie> {
    return this.response;
  }
}
