import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../api';

@Component({
  selector: 'mv-search',
  templateUrl: './search.template.html',
  styleUrls: ['./search.styles.scss']
})
export class SearchComponent implements OnInit {
  search = '';
  constructor(private router: Router) { }

  ngOnInit() { }

  onClick() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        query: this.search
      }
    };
    this.router.navigate(['/'], navigationExtras);
  }
}
