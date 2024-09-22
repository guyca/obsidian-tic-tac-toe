import { DarkModeToggle } from './buttons/darkModeToggle';

export const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="app-name">Tic Tac Toe</div>
      <div className="top-bar-buttons">
        <DarkModeToggle />
      </div>
    </div>
  );
};
