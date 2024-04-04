import { Observable } from 'react-obsidian';
import { type PlayerMark } from './PlayerMark';

export class CurrentPlayer extends Observable<PlayerMark> {
  constructor(startingPlayer: PlayerMark = 'X') {
    super(startingPlayer);
  }

  public nextPlayer() {
    this.value = this.value === 'X' ? 'O' : 'X';
  }
}
