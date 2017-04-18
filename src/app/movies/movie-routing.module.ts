import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent }    from './movies-list';
import { MovieDetailComponent }  from './movie-detail';
const moviesRoutes: Routes = [
  { path: '',  component: MoviesListComponent },
  { path: 'movie/:id', component: MovieDetailComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(moviesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule { }
