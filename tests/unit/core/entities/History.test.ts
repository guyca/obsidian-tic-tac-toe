import { History } from '../../../../src/core/entities/History';

describe('History', () => {
  it('should set the initial entry', () => {
    const history = new History(['']);
    expect(history.value).toEqual([
      { text: 'Go to game start', squares: [''], currentPlayer: 'X' },
    ]);
  });

  it('should be able to add a new entry', () => {
    const history = new History(['']);
    history.add(['X'], 'X');
    expect(history.value).toEqual([
      { text: 'Go to game start', squares: [''], currentPlayer: 'X' },
      { text: 'Go to move #1', squares: ['X'], currentPlayer: 'X' },
    ]);
  });

  it('should be able to go to a previous entry', () => {
    const history = new History(['']);
    history.add(['X'], 'X');
    history.add(['X', 'O'], 'O');
    history.goTo(1);
    expect(history.value).toEqual([
      { text: 'Go to game start', squares: [''], currentPlayer: 'X' },
      { text: 'Go to move #1', squares: ['X'], currentPlayer: 'X' },
    ]);
  });
});
