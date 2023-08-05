import { DependenciesOf, injectComponent } from 'react-obsidian';
import { HistoryGraph } from './di/HistoryGraph';

type Injected = DependenciesOf<
  HistoryGraph,
  'useViewModel' | 'componentFactory'
>;

export const _History = ({ useViewModel, componentFactory }: Injected) => {
  const { entries } = useViewModel();
  return (
    <div className="history">
      <h1>
        {entries.map((_, index) => {
          const Entry = componentFactory.create('entry');
          return <Entry index={index} key={index} />;
        })}
      </h1>
    </div>
  );
};

export const History = injectComponent(_History, HistoryGraph);
