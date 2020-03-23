import { Component, OnInit } from '@angular/core';
import { Game } from './game.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { GameService } from './game.service';
import { trigger, state, style, animation, animate, transition } from '@angular/animations';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  animations: [
    trigger('alarmState', [
      state('sold', style({opacity: 1})),
      state('unsold', style({opacity: 0}))
     ,
      transition('sold <=> unsold', animate(500)
      )
    ])
  ]
})
export class GameComponent implements OnInit {
  sold = 'unsold';
  id: string;
  gameLoaded: Game;
  constructor(private route: ActivatedRoute, private gameService: GameService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(url => {

      if (!url.has('id')) {
        return;
      }
      this.id = url.get('id');
      this.gameLoaded = this.gameService.games[this.id];
    });
  }

onBuy() {
  if (!this.auth.isLogged()) {
    this.router.navigateByUrl('/signup');
    this.auth.previousUrl = this.id;
  } else {
    this.sold = 'sold';
    setTimeout(() => {
this.sold = 'unsold';
}, 3000);
  }

}

}
