export { Router } from '@angular/router';
import { Component, Directive, HostListener, Injectable, Input } from '@angular/core';
import { NavigationExtras, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RouterStub {

  private _testEvent: NavigationEnd;
  private subject = new BehaviorSubject(this._testEvent);
  events = this.subject.asObservable();

  get testEvent(): NavigationEnd { return this._testEvent; }
  set testEvent(event: NavigationEnd) {
    this._testEvent = event;
    this.subject.next(this._testEvent);
  }
  navigate(_commands: any[], _extras?: NavigationExtras) { }
}


@Component({selector: 'router-outlet', template: ''})
export class RouterOutletStubComponent { }

@Directive({
  selector: '[routerLink]'
})
export class RouterLinkStubDirective {
  @Input() routerLink: any;
  navigatedTo: any = null;

  @HostListener('click') onClick() {
    this.navigatedTo = this.routerLink;
  }
}

@Directive({
  selector: '[routerLinkActive]'
})
export class RouterLinkActiveStubDirective {
  @Input() routerLinkActive: any;
}
