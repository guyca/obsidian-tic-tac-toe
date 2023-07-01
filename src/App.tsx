import { Board } from "./components/board/Board";
import { Status } from "./components/status/Status";
import { History } from "./components/history/History";

export default function Game() {
  return (
    <div className="root">
      <Status />
      <div className="game">
        <Board />
        <History />
      </div>
    </div>
  );
}
