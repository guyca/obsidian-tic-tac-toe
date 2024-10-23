import { type DependenciesOf, injectComponent } from 'react-obsidian';
import { SquareGraph } from './di/SquareGraph';

export type Props = { index: number };
type Injected = DependenciesOf<SquareGraph, 'useViewModel'>;

export const Square_ = ({ useViewModel }: Injected) => {
  const { text, testId, onClick } = useViewModel();

  return (
    <button className="square" onClick={onClick} data-testid={testId}>
      {text}
    </button>
  );
};

export const Square = injectComponent<Props, Injected>(Square_, SquareGraph);
