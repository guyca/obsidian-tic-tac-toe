import { type DependenciesOf, injectComponent } from 'react-obsidian';
import { EntryGraph } from './di/EntryGraph';

export type Props = {
  index: number
};

type Injected = DependenciesOf<EntryGraph, 'useViewModel'>;

const Entry_ = ({ useViewModel }: Props & Injected) => {
  const { text, onClick } = useViewModel();

  return (
    <li>
      <button onClick={onClick}>{text}</button>
    </li>
  );
};

export const Entry = injectComponent<Props, Injected>(Entry_, EntryGraph);
export const createEntry = (_: unknown, index: number) => <Entry index={index} />;
