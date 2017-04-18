import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';
import { ApiService, Movie, MoviesResponse, MovSearchParams } from '../../core/api';

@Component({
  selector: 'mv-movie-detail',
  templateUrl: './movie-detail.template.html'
})
export class MovieDetailComponent implements OnInit {
  movie : Movie;
  loading = false;
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.route.params.mergeMap(params => {
      this.loading = true;
      return this.api.getMovie(params.id).catch(err => {
          this.movie = undefined;
          this.loading = false;
          alert('Something went wrong');
          return Observable.empty();
      });
      }).map((mov: Movie) => {
        this.movie = mov;
        this.loading = false;
      })
    .subscribe();

  }
}
