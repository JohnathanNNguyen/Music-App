import { Component, OnInit } from '@angular/core';
import { SpotifyApiService } from 'src/app/spotify-api.service';
import { animate, state, style, transition, trigger } from '@angular/animations';




@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TrackComponent implements OnInit {
  playbackId: string;
  playbackUrl: string
  constructor(private spotifyApi: SpotifyApiService) { }

  ngOnInit(): void {
    this.spotifyApi.updatedPlaylist
      .subscribe(() => {
        this.playbackId = this.spotifyApi.playbackId
      })
  }

}


