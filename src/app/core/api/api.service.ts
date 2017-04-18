import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Movie, MovSearchParams, MoviesResponse } from './api.interfaces';

@Injectable()
export class ApiService {

  base = 'https://api.themoviedb.org/3/';
  private key  = 'dc0fd70a874723f007eb56a27d057c67';

  constructor(private http: Http) { }

  searchMovies(params: MovSearchParams): Observable<MoviesResponse> {
    const search = Object.assign({}, { api_key: this.key }, params)
    const options = new RequestOptions({ search })

    return this.http.get(`${this.base}search/movie`, options)
      .map(res => res.json() as MoviesResponse);
  }


  getMovie(movieId: number): Observable<Movie> {
    const search = Object.assign({}, { api_key: this.key })
    const options = new RequestOptions({ search })

    return this.http.get(`${this.base}movie/${movieId}`, options)
      .map(res => res.json() as Movie);
  }


  get apiKey() {
    return this.key;
  }

  set apiKey(value) {
    this.key = value;
  }

}
