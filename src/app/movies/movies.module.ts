import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { MoviesRoutingModule } from './movie-routing.module';
import { MovieItemComponent, MoviesListComponent } from './movies-list';
import { MovieDetailComponent } from './movie-detail';

@NgModule({
  imports: [
    SharedModule,
    MoviesRoutingModule
  ],
  exports: [],
  declarations: [
    MovieDetailComponent,
    MovieItemComponent,
    MoviesListComponent
  ],
  providers: []
})
export class MoviesModule { }
