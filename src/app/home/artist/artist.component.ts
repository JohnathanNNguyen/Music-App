import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyApiService } from '../../spotify-api.service';


import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  spotifyData;
  token;

  constructor(private http: HttpClient,
    private spotifyApiService: SpotifyApiService) { }

  ngOnInit(): void {

  }

}
