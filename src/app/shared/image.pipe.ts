import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'image'})
export class ImagePipe implements PipeTransform {
  transform(imagePath: string): string {
    return `http://image.tmdb.org/t/p/w185/${imagePath}`;
  }
}

