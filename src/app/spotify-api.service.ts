import { Tokens } from '.secrets/secrets';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService implements OnInit {
  updatedPlaylist = new Subject<any>();
  updatedTracks = new Subject<{}>()
  playbackId: string;
  currentTracks: {}
  token: string;
  searchType: string;
  postId;
  currentPlaylist;


  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
  updatePlaylist() {
    this.updatedPlaylist.next(this.currentPlaylist)
    this.updatedTracks.next(this.currentTracks)
  }

  getApiToken() {
    return this.http.post(
      "https://accounts.spotify.com/api/token",
      'grant_type=client_credentials',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(Tokens.ClientId + ':' + Tokens.ClientSecret),
        },
      })
  }
  searchInput(input: string) {
    return this.http.get(
      'https://api.spotify.com/v1/search?q=' + input + '&type=artist',
      {
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + this.token
        }
      }
    )
  }
  getCategories() {
    return this.http.get(
      "https://api.spotify.com/v1/browse/categories?country=us",
      {
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        }
      }
    );
  }
  browseCategory(category: string) {
    return this.http.get(
      'https://api.spotify.com/v1/browse/categories/' + category + '/playlists?country=us',
      {
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        }
      }
    )
  }
  getApiData(apiUrl: string) {
    return this.http.get(
      apiUrl,
      {
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        }
      }
    )
  }



}





//https://api.spotify.com/v1/browse/categories?country=US
