import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyApiService } from '../../spotify-api.service';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  searchData;
  artistData: [];
  searchInput: string = null;
  artistSearched: boolean = false;
  artistTracks;

  constructor(
    private http: HttpClient,
    private spotifyApiService: SpotifyApiService
  ) {}

  ngOnInit(): void {
    if (this.spotifyApiService.artistData.length > 0) {
      this.artistSearched = true;
    } else {
      this.artistSearched = false;
    }
  }

  onSearch(input: string, type: string) {
    this.spotifyApiService.searchArtist(input, type).subscribe((data) => {
      this.searchData = data;
      this.spotifyApiService.artistData = this.searchData.artists.items;
      this.artistData = this.spotifyApiService.artistData;
      this.artistSearched = true;
    });

    this.searchInput = null;
  }

  onSelectArtist(id: string) {
    this.spotifyApiService.getApiData(id).subscribe((data) => {
      this.artistTracks = data;
      console.log(this.artistTracks);
      this.spotifyApiService.playbackId = 'artist/' + this.artistTracks.id;
      this.spotifyApiService.updatePlaylist();
    });
  }
}
