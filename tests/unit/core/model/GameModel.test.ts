import { mock } from 'jest-mock-extended';
import { GameModel } from '../../../../src/core/model/GameModel';
import { CalculateWinnerUseCase } from '../../../../src/core/usecases/CalculateWinnerUseCase';
import { when } from 'jest-when';

describe('GameModel', () => {
  let uut: GameModel;
  let calculateWinnerUseCase: CalculateWinnerUseCase;

  beforeEach(() => {
    calculateWinnerUseCase = mock();
    uut = new GameModel(calculateWinnerUseCase);
  });

  it('should keep track of the board state', () => {
    expect(uut.squares.value).toEqual(Array(9).fill(undefined));
    uut.onSquareClick(1);
    expect(uut.squares.value).toEqual([
      undefined,
      'X',
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ]);
  });

  it('should update the status after a square was clicked', () => {
    expect(uut.status.value).toEqual('Next player: X');
    uut.onSquareClick(1);
    expect(uut.status.value).toEqual('Next player: O');
  });

  it('should restore squares when a history entry is clicked', () => {
    uut.onSquareClick(1);
    uut.onHistoryEntryClick(0);
    expect(uut.squares.value).toEqual(Array(9).fill(undefined));
  });

  it('should restore the status when a history entry is clicked', () => {
    uut.onSquareClick(1);
    uut.onHistoryEntryClick(0);
    expect(uut.status.value).toEqual('Next player: X');
  });

  it('should announce the winner when a player wins', () => {
    when(calculateWinnerUseCase.calculate)
      .calledWith(expect.anything())
      .mockReturnValue('X');
    uut.onSquareClick(0);
    expect(uut.status.value).toEqual('Winner: X');
  });
});
