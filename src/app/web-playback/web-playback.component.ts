import { Tokens } from '../../../.secrets/secrets';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-playback',
  templateUrl: './web-playback.component.html',
  styleUrls: ['./web-playback.component.scss']
})
export class WebPlaybackComponent implements OnInit {

  TOKEN: string = Tokens.WEBPACKTOKEN
  constructor() { }

  ngOnInit(): void {
  }

}
