import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mv-movie-item',
  templateUrl: './movie-item.template.html'
})
export class MovieItemComponent implements OnInit {
  @Input() movie;
  constructor() { }

  ngOnInit() {}
}
