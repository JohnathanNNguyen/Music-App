import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpotifyApiService } from 'src/app/spotify-api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  categoryApiData;
  categoryItems: [] = [];
  categoryList;

  constructor(private spotifyApi: SpotifyApiService) {}

  ngOnInit(): void {
    this.spotifyApi.getCategories().subscribe((data) => {
      this.categoryApiData = data;
      this.categoryItems = this.categoryApiData.categories.items;
    });
  }
  onPickedCategory(category: string) {
    this.spotifyApi.browseCategory(category).subscribe((data) => {
      this.categoryList = data;
      this.spotifyApi.currentPlaylist = data;
      this.spotifyApi.updatePlaylist();
    });
  }

  ngOnDestroy() {}
}
