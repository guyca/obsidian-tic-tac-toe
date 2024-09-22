import { Board } from '../components/board/Board';
import { Status } from '../components/status/Status';
import { History } from '../components/history/History';
import { TopBar } from '../components/topBar/TopBar';
import { type DependenciesOf, injectComponent } from 'react-obsidian';
import { AppGraph } from './AppGraph';

const App = ({ useViewModel }: DependenciesOf<AppGraph, 'useViewModel'>) => {
  const { isReady } = useViewModel();

  if (!isReady) return <div>Loading...</div>;

  return (
    <div className="root">
      <TopBar />
      <div className="game-container">
        <Status />
        <div className="game">
          <Board />
          <History />
        </div>
      </div>
    </div>
  );
};

export default injectComponent(App, AppGraph);
