import { type DependenciesOf, injectComponent } from 'react-obsidian';
import { StatusGraph } from './di/StatusGraph';

export const Status_ = ({
  useViewModel,
}: DependenciesOf<StatusGraph, 'useViewModel'>) => {
  const { status } = useViewModel();

  return (
    <div className="status" data-testid="status">
      {status}
    </div>
  );
};

export const Status = injectComponent(Status_, StatusGraph);
