import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppState } from '../../app.service';

@Component({
  selector: 'new-game',
  styleUrls: [
    './newgame.component.css'
  ],
  templateUrl: './newGame.component.html'
})
export class NewGameComponent implements OnInit {

  public localState: any;
  constructor(
    public route: ActivatedRoute,
    public appState: AppState
  ) {}

  public ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });
  }

  startGame(username) {
    this.appState.set('name', username);
  }

}
