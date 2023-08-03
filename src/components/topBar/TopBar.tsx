import { DependenciesOf, injectComponent } from 'react-obsidian';
import { DarkModeToggle } from './buttons/darkModeButton';
import { TopBarGraph } from './graph/TopBarGraph';

type Injected = DependenciesOf<TopBarGraph, 'useViewModel'>;

export const _TopBar = ({ useViewModel }: Injected) => {
  const { toggleDarkMode } = useViewModel();

  return (
    <div className="top-bar">
      <div className="app-name">Tic Tac Toe</div>
      <div className="top-bar-buttons">
        <DarkModeToggle onClick={toggleDarkMode} />
      </div>
    </div>
  );
};

export const TopBar = injectComponent(_TopBar, TopBarGraph);
