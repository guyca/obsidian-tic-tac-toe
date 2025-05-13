import { graph, ObjectGraph, provides, singleton } from 'react-obsidian';
import { topBarViewModel } from '../model/topBarViewModel';
import { type ThemeModel } from '../../../presentation/model/ThemeModel';
import { ThemeGraph } from '../../../core/di/ThemeGraph';

@singleton() @graph({ subgraphs: [ThemeGraph] })
export class TopBarGraph extends ObjectGraph {
  @provides()
  useViewModel(themeModel: ThemeModel) {
    return () => topBarViewModel(themeModel);
  }
}
