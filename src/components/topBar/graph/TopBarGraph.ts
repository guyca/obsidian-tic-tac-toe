import { Graph, ObjectGraph, Provides, Singleton } from 'react-obsidian';
import { topBarViewModel } from '../model/topBarViewModel';
import { GameGraph } from '../../../core/di/GameGraph';
import { ThemeModel } from '../../../lib/ui/model/ThemeModel';

@Singleton()
@Graph({ subgraphs: [GameGraph] })
export class TopBarGraph extends ObjectGraph {
  @Provides()
  useViewModel(themeModel: ThemeModel) {
    return () => topBarViewModel(themeModel);
  }
}
