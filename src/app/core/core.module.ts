import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar';
import { SearchComponent } from './search';
import { ApiService } from './api';

@NgModule({
  imports: [
    HttpModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    SearchComponent
  ],
  declarations: [
    NavbarComponent,
    SearchComponent
  ],
  providers: [
    ApiService
  ]
})
export class CoreModule { }
