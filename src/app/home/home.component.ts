import { AfterContentInit, Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
// import { SpotifyApiService } from '../spotify-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition],
})
export class HomeComponent implements OnInit, AfterContentInit {
  dataLoaded: boolean = false;
  constructor() {}

  ngOnInit() {}
  ngAfterContentInit() {
    this.dataLoaded = true;
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
