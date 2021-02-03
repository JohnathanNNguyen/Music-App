import { Component, OnInit } from '@angular/core';
import { Artist } from '../Models/artist.model';
import { SpotifyApiService } from '../spotify-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  input: string;
  type: string;
  searchData;
  constructor(private spotifyApiService: SpotifyApiService) {
  }

  onSearch(input: string) {
    this.spotifyApiService.searchInput(input)
      .subscribe((data) => {
        this.searchData = data
        console.log(data)
      })
  }
}
