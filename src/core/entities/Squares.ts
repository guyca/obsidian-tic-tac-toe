import { Observable } from "react-obsidian";
import { PlayerMark } from "./PlayerMark";

export class Squares extends Observable<string[]> {
  constructor() {
    super(Array.from({ length: 9 }));
  }

  public mark(index: number, mark: PlayerMark) {
    const nextSquares = [...this.value];
    nextSquares[index] = mark;
    this.value = nextSquares;
  }
}