import { Component, OnInit } from '@angular/core';
import { SpotifyApiService } from './spotify-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dataLoaded: boolean = false;
  events: string[] = [];
  opened: boolean = true;
  tokenData;


  constructor(private spotifyApi: SpotifyApiService) {
  }
  ngOnInit() {
    // spotify requires a new token every hour to access their API so below we call the function evey hour
    this.getToken()
    setInterval(() => {
      this.getToken()
    }, 60 * 60 * 1000)

  }

  getToken() {
    this.spotifyApi.getApiToken()
      .subscribe((data) => {
        this.tokenData = data
        this.spotifyApi.token = this.tokenData.access_token
        console.log(this.spotifyApi.token, 'REMOVE ME WHEN YOU PUBLISH!!!!!!')
        this.dataLoaded = true
      })
  }

}
