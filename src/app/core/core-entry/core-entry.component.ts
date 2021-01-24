import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideInAnimation} from '../../shared/animations/animations';
import {fader} from '../../shared/animations/route-animation';

@Component({
  selector: 'app-core-entry',
  templateUrl: './core-entry.component.html',
  styleUrls: ['./core-entry.component.scss'],
  animations: [
    // slideInAnimation
    // animation triggers go here
    // fader
  ]
})
export class CoreEntryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
