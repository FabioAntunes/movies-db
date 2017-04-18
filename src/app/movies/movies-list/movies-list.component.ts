import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';
import { ApiService, Movie, MoviesResponse, MovSearchParams } from '../../core/api';

@Component({
  selector: 'mv-movies-list',
  templateUrl: './movies-list.template.html'
})
export class MoviesListComponent implements OnInit {
  loading = false;
  page = 1;
  totalPages = 1;
  movies:  Movie[] = [];
  searchParams: MovSearchParams;
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.route.queryParams.mergeMap((params: MovSearchParams) => {
      this.loading = true;
      this.searchParams = params;
      if (!params.query) return Observable.empty();
      return this.api.searchMovies(params).catch(err => {
          this.movies = [];
          this.loaded();
          alert('Something went wrong');
          return Observable.empty();
      });
      }).map((res: MoviesResponse) => {
        this.movies = res.results;
        this.page = res.page;
        this.totalPages = res.total_pages;
        this.loaded();
      })
    .subscribe();
  }


  loaded(value = 500) {
    setTimeout(() => {
      this.loading = false;
    }, value);
  }
}
