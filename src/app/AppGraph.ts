import { graph, ObjectGraph, provides, singleton } from 'react-obsidian';
import { useAppViewModel } from './appViewModel';
import { type GameModel } from '../core/model/GameModel';
import { GameGraph } from '../core/di/GameGraph';
import { type ThemeModel } from '../presentation/model/ThemeModel';
import { ThemeGraph } from '../core/di/ThemeGraph';

@singleton() @graph({ subgraphs: [GameGraph, ThemeGraph] })
export class AppGraph extends ObjectGraph {
  @provides()
  useViewModel(model: GameModel, themeModel: ThemeModel) {
    return () => useAppViewModel(model, themeModel);
  }
}
