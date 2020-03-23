import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { GameService } from '../game/game.service';
import { Game } from '../game/game.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games: Game[];
  constructor(gameservice: GameService) {
    this.games = gameservice.games;
  }

  ngOnInit() {

  }

}
