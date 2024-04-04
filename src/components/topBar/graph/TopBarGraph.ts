import { Graph, ObjectGraph, Provides, Singleton } from 'react-obsidian';
import { topBarViewModel } from '../model/topBarViewModel';
import { type ThemeModel } from '../../../presentation/model/ThemeModel';
import { ThemeGraph } from '../../../core/di/ThemeGraph';

@Singleton()
@Graph({ subgraphs: [ThemeGraph] })
export class TopBarGraph extends ObjectGraph {
  @Provides()
  useViewModel(themeModel: ThemeModel) {
    return () => topBarViewModel(themeModel);
  }
}
