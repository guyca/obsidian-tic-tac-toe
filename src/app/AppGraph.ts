import { Graph, ObjectGraph, Provides, Singleton } from 'react-obsidian';
import { useAppViewModel } from './appViewModel';
import { GameModel } from '../core/model/GameModel';
import { GameGraph } from '../core/di/GameGraph';
import { ThemeModel } from '../presentation/model/ThemeModel';
import { ThemeGraph } from '../core/di/ThemeGraph';

@Singleton()
@Graph({ subgraphs: [GameGraph, ThemeGraph] })
export class AppGraph extends ObjectGraph {
  @Provides()
  useViewModel(model: GameModel, themeModel: ThemeModel) {
    return () => useAppViewModel(model, themeModel);
  }
}
