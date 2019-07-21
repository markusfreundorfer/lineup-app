import { Injectable } from '@angular/core';
import players from '../../assets/data/players.json';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() {
    console.log(players);
   }

   
}
