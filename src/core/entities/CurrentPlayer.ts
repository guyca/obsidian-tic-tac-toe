import { Observable } from "react-obsidian";
import { PlayerMark } from "./PlayerMark";

export class CurrentPlayer extends Observable<PlayerMark> {
  constructor(startingPlayer: PlayerMark = 'X') {
    super(startingPlayer);
  }

  public nextPlayer() {
    this.value = this.value === 'X' ? 'O' : 'X';
    console.log('nextPlayer -> ', this.value);
  }
}