import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'mv-search',
  templateUrl: './search.template.html',
  styleUrls: ['./search.styles.scss']
})
export class SearchComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  ngOnInit() { }

  onClick() {
    this.apiService.searchMovies({query: 'Matrix'}).subscribe(res => {
      console.log(res);
    })
  }
}
