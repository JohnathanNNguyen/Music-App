import { Component, OnInit } from '@angular/core';
import { SpotifyApiService } from '../spotify-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  input: string;
  type: string;
  searchInput: string;
  searchData;
  constructor(private spotifyApiService: SpotifyApiService) {}

  onSearch(input: string, type: string) {
    this.spotifyApiService.searchArtist(input, type).subscribe((data) => {
      this.searchData = data;
      console.log(data);
    });
  }
}
