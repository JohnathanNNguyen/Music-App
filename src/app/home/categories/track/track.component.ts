import { Component, OnInit } from '@angular/core';
import { SpotifyApiService } from 'src/app/spotify-api.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  playlistObj;
  currentPlaylist;
  constructor(private spotifyApi: SpotifyApiService) { }

  ngOnInit(): void {
    this.currentPlaylist = this.spotifyApi.updatedPlaylist
      .subscribe(() => {
        this.playlistObj = this.spotifyApi.currentTracks
        this.currentPlaylist = this.playlistObj
      })
  }

  onTestApi() {
    console.log(this.playlistObj)
  }

}
