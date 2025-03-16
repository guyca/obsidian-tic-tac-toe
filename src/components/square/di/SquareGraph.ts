import { Graph, ObjectGraph, Provides } from 'react-obsidian';
import { type GameModel } from '../../../core/model/GameModel';
import { GameGraph } from '../../../core/di/GameGraph';
import { useSquareViewModel, type squareViewModel as SquareViewModel } from '../model/squareViewModel';
import { type Props } from '../Square';

@Graph({ subgraphs: [GameGraph] })
export class SquareGraph extends ObjectGraph {
  private index: number;

  constructor(props: Props) {
    super(props);
    this.index = props.index;
  }

  @Provides()
  useViewModel(model: GameModel): SquareViewModel {
    return () => useSquareViewModel(this.index, model);
  }
}
