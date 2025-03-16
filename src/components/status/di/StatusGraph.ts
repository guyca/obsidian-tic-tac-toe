import { Graph, LifecycleBound, ObjectGraph, Provides } from 'react-obsidian';
import { GameGraph } from '../../../core/di/GameGraph';
import { type StatusViewModel, useStatusViewModel } from '../model/statusViewModel';
import { type GameModel } from '../../../core/model/GameModel';

@LifecycleBound() @Graph({ subgraphs: [GameGraph] })
export class StatusGraph extends ObjectGraph {
  @Provides()
  useViewModel(model: GameModel): StatusViewModel {
    return () => useStatusViewModel(model);
  }
}
