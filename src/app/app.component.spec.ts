import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { RouterOutletStubComponent } from './testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        RouterOutletStubComponent,
        SearchComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

@Component({
  selector: 'mv-search',
  template: `<p>search</p>`
})
export class SearchComponent { }

@Component({
  selector: 'mv-navbar',
  template: `<nav>navbar</nav>`
})
export class  NavbarComponent { }
