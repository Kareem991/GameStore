import { Injectable } from '@angular/core';
import { Game } from './game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
games: Game[];
  constructor() {
    this.games = [
      new Game('A plague tale',
     '../../assets/Images/Games/1.jpg',
     'Alicia and her little brother are trying to survive through the plague and the inquisition',
    'Story Telling' , 30
    ),
    new Game('Battlefield 1',
    '../../assets/Images/Games/2.jpg',
    'This time the battlefield is world war 1, so are you prepared for war?',
   'Shooter' , 10
   ),
   new Game('Age Of Empires 1',
   '../../assets/Images/Games/3.jpg',
   'The classic startegy game which has one of the most iconic soundtracks is back on the menu!',
  'Strategy' , 20
  ),
  ];
  }
}
