import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { NotFoundComponent } from './not-found';

const appRoutes: Routes = [
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

