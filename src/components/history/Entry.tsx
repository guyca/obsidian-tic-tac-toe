import React from 'react';
import { type DependenciesOf, injectComponent } from 'react-obsidian';
import { EntryGraph } from './di/EntryGraph';

export type Props = {
  index: number
};

type Injected = DependenciesOf<EntryGraph, 'useViewModel'>;

const _Entry = ({ useViewModel }: Props & Injected) => {
  const { text, onClick } = useViewModel();

  return (
    <li>
      <button onClick={onClick}>{text}</button>
    </li>
  );
};

export const Entry = injectComponent<Props, Injected>(_Entry, EntryGraph);
export const createEntry = (_, index: number) => <Entry index={index} />;
