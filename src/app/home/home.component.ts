import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition],
})
export class HomeComponent implements OnInit, AfterContentInit {
  dataLoaded: boolean = false;
  constructor(public router: Router) {}

  ngOnInit() {}
  ngAfterContentInit() {
    this.dataLoaded = true;
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
