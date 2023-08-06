import { MediatorObservable, Model, Observable } from 'react-obsidian';
import { CurrentPlayer } from '../entities/CurrentPlayer';
import { Squares } from '../entities/Squares';
import { CalculateWinnerUseCase } from '../usecases/CalculateWinnerUseCase';
import { History } from '../entities/History';

export class GameModel extends Model {
  private readonly currentPlayer = new CurrentPlayer();
  public readonly squares = new Squares();
  public readonly history = new History(this.squares.value);
  public readonly status = new MediatorObservable<string>();
  public readonly isReady = new Observable<boolean>(false);

  constructor(private calculateWinnerUseCase: CalculateWinnerUseCase) {
    super();
    this.status.mapSource(this.currentPlayer, (player) => {
      const winner = calculateWinnerUseCase.calculate(this.squares.value);
      return winner ? `Winner: ${winner}` : `Next player: ${player}`;
    });
  }

  public onSquareClick(index: number) {
    if (this.squares.value[index]) return;
    this.squares.mark(index, this.currentPlayer.value);
    this.currentPlayer.nextPlayer();
    this.history.add(this.squares.value, this.currentPlayer.value);
  }

  public onHistoryEntryClick(index: number) {
    this.history.goTo(index);
    this.squares.value = this.history.value[index].squares;
    this.currentPlayer.value = this.history.value[index].currentPlayer;
  }
}
