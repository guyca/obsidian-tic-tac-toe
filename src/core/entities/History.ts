import { Observable } from 'react-obsidian';
import { type PlayerMark } from './PlayerMark';

export type Entry = {
  text: string
  squares: PlayerMark[]
  currentPlayer: PlayerMark
};

export class History extends Observable<Entry[]> {
  constructor(squares: PlayerMark[]) {
    super([{ text: 'Go to game start', squares: squares, currentPlayer: 'X' }]);
  }

  public add(squares: PlayerMark[], currentPlayer: PlayerMark) {
    this.value = [
      ...this.value,
      {
        text: this.isEmpty ? 'Go to game start' : `Go to move #${this.size}`,
        squares,
        currentPlayer,
      },
    ];
  }

  private get size() {
    return this.value.length;
  }

  private get isEmpty() {
    return this.value.length === 0;
  }

  public goTo(index: number) {
    const nextHistory = this.value.slice(0, index + 1);
    this.value = nextHistory;
  }
}
