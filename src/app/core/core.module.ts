import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar';
import { SearchComponent } from './search';

@NgModule({
  imports: [],
  exports: [
    NavbarComponent,
    SearchComponent
  ],
  declarations: [
    NavbarComponent,
    SearchComponent
  ],
  providers: []
})
export class CoreModule { }
