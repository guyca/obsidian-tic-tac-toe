import { graph, lifecycleBound, ObjectGraph, provides } from 'react-obsidian';
import { GameGraph } from '../../../core/di/GameGraph';
import { type StatusViewModel, useStatusViewModel } from '../model/statusViewModel';
import { type GameModel } from '../../../core/model/GameModel';

@lifecycleBound() @graph({ subgraphs: [GameGraph] })
export class StatusGraph extends ObjectGraph {
  @provides()
  useViewModel(model: GameModel): StatusViewModel {
    return () => useStatusViewModel(model);
  }
}
