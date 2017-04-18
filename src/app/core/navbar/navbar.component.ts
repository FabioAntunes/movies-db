import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'mv-navbar',
  templateUrl: './navbar.template.html',
  styleUrls: ['./navbar.styles.scss']
})
export class NavbarComponent implements OnInit {
  apiKey = '';
  constructor(private api: ApiService) { }

  ngOnInit() { }

  onChange(value) {
    this.api.apiKey = value;
  }
}
