import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SpotifyApiService } from 'src/app/spotify-api.service';

@Component({
  selector: 'app-browse-category',
  templateUrl: './browse-category.component.html',
  styleUrls: ['./browse-category.component.scss'],
})
export class BrowseCategoryComponent implements OnInit {
  id;
  playlistObj;
  playlist = [];
  playlistTracks;

  constructor(private spotifyApiService: SpotifyApiService) {}

  ngOnInit(): void {
    this.spotifyApiService.updatedPlaylist.subscribe(() => {
      this.playlistObj = this.spotifyApiService.currentPlaylist;
      this.playlist = this.playlistObj.playlists.items;
    });
  }

  onPlaylist(id: string) {
    this.spotifyApiService.getApiData(id).subscribe((data) => {
      this.playlistTracks = data;
      this.spotifyApiService.currentTracks = this.playlistTracks.tracks.items;
      this.spotifyApiService.playbackId = 'playlist/' + this.playlistTracks.id;
      this.spotifyApiService.updatePlaylist();
      console.log(this.spotifyApiService.playbackId);
    });
  }
}
