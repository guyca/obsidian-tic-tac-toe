import { graph, ObjectGraph, provides } from 'react-obsidian';
import { useEntryViewModel } from '../model/entryViewModel';
import { GameGraph } from '../../../core/di/GameGraph';
import { type Props } from '../Entry';
import { type GameModel } from '../../../core/model/GameModel';

@graph({ subgraphs: [GameGraph] })
export class EntryGraph extends ObjectGraph {
  private index: number;

  constructor(props: Props) {
    super(props);
    this.index = props.index;
  }

  @provides()
  useViewModel(model: GameModel) {
    return () => useEntryViewModel(this.index, model);
  }
}
