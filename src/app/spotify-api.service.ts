import { Tokens } from '.secrets/secrets';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyApiService {
  updatedPlaylist = new Subject<any>();
  updatedTracks = new Subject<{}>();
  artistData: [] = [];
  tracksData: [] = [];
  playbackId: string;
  currentTracks: {};
  token: string;
  searchType: string;
  currentPlaylist;

  constructor(private http: HttpClient) {}

  updatePlaylist() {
    this.updatedPlaylist.next(this.currentPlaylist);
    this.updatedTracks.next(this.currentTracks);
  }

  getApiToken() {
    return this.http.post(
      'https://accounts.spotify.com/api/token',
      'grant_type=client_credentials',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' + btoa(Tokens.ClientId + ':' + Tokens.ClientSecret),
        },
      }
    );
  }
  searchArtist(input: string, type: string) {
    return this.http.get(
      'https://api.spotify.com/v1/search?q=' +
        input +
        '&type=' +
        type +
        '&market=us',
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.token,
        },
      }
    );
  }
  getCategories() {
    return this.http.get(
      'https://api.spotify.com/v1/browse/categories?country=us',
      {
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.token,
        },
      }
    );
  }
  browseCategory(category: string) {
    return this.http.get(
      'https://api.spotify.com/v1/browse/categories/' +
        category +
        '/playlists?country=us',
      {
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.token,
        },
      }
    );
  }
  getApiData(apiUrl: string) {
    return this.http.get(apiUrl, {
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      },
    });
  }
}

//https://api.spotify.com/v1/browse/categories?country=US
