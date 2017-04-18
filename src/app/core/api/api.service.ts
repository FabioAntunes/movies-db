import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { SearchMovies, MoviesResponse } from './api.interfaces';

@Injectable()
export class ApiService {

  base = 'https://api.themoviedb.org/3/';
  private key  = '';

  constructor(private http: Http) { }

  searchMovies(params: SearchMovies): Observable<MoviesResponse> {
    const search = Object.assign({}, { api_key: this.key }, params)
    const options = new RequestOptions({ search })

    return this.http.get(`${this.base}search/movie`, options)
      .map(res => res.json() as MoviesResponse);
  }


  get apiKey() {
    return this.key;
  }

  set apiKey(value) {
    this.key = value;
  }

}
