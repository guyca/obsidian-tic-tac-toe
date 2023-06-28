import { DependenciesOf, injectComponent } from "react-obsidian";
import { HistoryGraph } from "./di/HistoryGraph";
import { createEntry } from "./Entry";

const _History = ({useViewModel}: DependenciesOf<HistoryGraph, 'useViewModel'>) => {
  const {entries} = useViewModel();
  return (
    <div className="history">
      <h1>{entries.map(createEntry)}</h1>
    </div>
  );
}

export const History = injectComponent(_History, HistoryGraph);