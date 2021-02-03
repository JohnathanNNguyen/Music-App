import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
// import { SpotifyApiService } from '../spotify-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition]
})
export class HomeComponent implements OnInit {
  links = ['Categories', 'Artist', 'Tracks']
  activeLink = this.links[0];


  constructor() {
  }

  ngOnInit() {
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
