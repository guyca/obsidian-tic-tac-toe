import { Graph, LifecycleBound, ObjectGraph, Provides } from 'react-obsidian';
import { type GameModel } from '../../../core/model/GameModel';
import { type HistoryViewModel, useHistoryViewModel } from '../model/historyViewModel';
import { GameGraph } from '../../../core/di/GameGraph';
import { EntryFactory } from '../services/ComponentFactory';

@LifecycleBound() @Graph({ subgraphs: [GameGraph] })
export class HistoryGraph extends ObjectGraph {
  @Provides()
  useViewModel(model: GameModel): HistoryViewModel {
    return () => useHistoryViewModel(model);
  }

  @Provides()
  componentFactory(): EntryFactory {
    return new EntryFactory();
  }
}
