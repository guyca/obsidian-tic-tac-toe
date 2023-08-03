import { DependenciesOf, injectComponent } from 'react-obsidian';
import { GameGraph } from '../../../core/di/GameGraph';
import { PropsWithChildren } from 'react';

type Own = { className } & PropsWithChildren;
type Injected = DependenciesOf<GameGraph, 'themeModel'>;

const _div = ({ className, children, themeModel }: Own & Injected) => {
  const { isDarkMode } = themeModel.use();

  return (
    <div
      className={className}
      style={{ backgroundColor: isDarkMode ? 'black' : 'white' }}
    >
      {children}
    </div>
  );
};

export const Div = injectComponent(_div, GameGraph);
