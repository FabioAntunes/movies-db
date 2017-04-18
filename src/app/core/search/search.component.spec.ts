import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';
import { click, Router, RouterStub } from '../../testing';

describe('SearchComponent', () => {

  let comp:    SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ SearchComponent ],
      providers: [
         { provide: Router, useClass: RouterStub }
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(SearchComponent);
      comp = fixture.componentInstance;
    });
  }));

  it('should use Router to navigate home with query params',
    inject([Router], (router: Router) => { // ...

    const search = 'Matrix';

    comp.search = search;
    fixture.detectChanges();

    const spy = spyOn(router, 'navigate');

    click(fixture.debugElement.query(By.css('button')).nativeElement);


    const routerArgs = spy.calls.first().args;

    expect(routerArgs[0]).toEqual(['/']);
    expect(routerArgs[1]).toEqual({
      queryParams: {
        query: search
      }
    });
  }));
});
