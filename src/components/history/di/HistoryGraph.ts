import { graph, lifecycleBound, ObjectGraph, provides } from 'react-obsidian';
import { type GameModel } from '../../../core/model/GameModel';
import { type HistoryViewModel, useHistoryViewModel } from '../model/historyViewModel';
import { GameGraph } from '../../../core/di/GameGraph';
import { EntryFactory } from '../services/ComponentFactory';

@lifecycleBound() @graph({ subgraphs: [GameGraph] })
export class HistoryGraph extends ObjectGraph {
  @provides()
  useViewModel(model: GameModel): HistoryViewModel {
    return () => useHistoryViewModel(model);
  }

  @provides()
  componentFactory(): EntryFactory {
    return new EntryFactory();
  }
}
