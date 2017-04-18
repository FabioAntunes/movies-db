import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ImagePipe } from './image.pipe';

@NgModule({
  imports: [],
  exports: [
    FormsModule,
    CommonModule,
    ImagePipe
  ],
  declarations: [ImagePipe],
  providers: []
})
export class SharedModule { }
