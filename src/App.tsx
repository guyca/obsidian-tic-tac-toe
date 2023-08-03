import { Board } from './components/board/Board';
import { Status } from './components/status/Status';
import { History } from './components/history/History';
import { TopBar } from './components/topBar/TopBar';
import { Div } from './lib/ui/components/div';

export default function Game() {
  return (
    <Div className="root">
      <TopBar />
      <div className="game-container">
        <Status />
        <div className="game">
          <Board />
          <History />
        </div>
      </div>
    </Div>
  );
}
