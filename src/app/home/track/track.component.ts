import { Component, OnInit } from '@angular/core';
import { SpotifyApiService } from 'src/app/spotify-api.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TrackComponent implements OnInit {
  trackSearched: boolean = false;
  playbackId: string;
  playbackUrl: string;
  searchInput: string;
  searchData;
  searchDataArray: [] = [];
  spotifyUrl: string = 'https://open.spotify.com/embed/track/';
  constructor(private spotifyApi: SpotifyApiService) {}

  ngOnInit(): void {
    this.spotifyApi.updatedPlaylist.subscribe(() => {
      this.playbackId = this.spotifyApi.playbackId;
    });
  }

  onSearch(input: string, type: string) {
    this.spotifyApi.searchArtist(input, type).subscribe((data) => {
      this.searchData = data;
      this.spotifyApi.tracksData = this.searchData.tracks.items;
      this.searchDataArray = this.searchData.tracks.items;
      this.playbackId = '';
      this.trackSearched = true;
      console.log(this.searchDataArray);
    });

    this.searchInput = null;
  }
}
