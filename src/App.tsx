import { Board } from './components/board/Board';
import { Status } from './components/status/Status';
import { History } from './components/history/History';

export default function Game() {
  return (
    <div className="root">
      <div className="game-container">
        <Status />
        <div className="game">
          <Board />
          <History />
        </div>
      </div>
    </div>
  );
}
