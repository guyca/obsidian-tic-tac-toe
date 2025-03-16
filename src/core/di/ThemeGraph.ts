import { Graph, ObjectGraph, Provides, Singleton } from 'react-obsidian';
import { ThemeModel } from '../../presentation/model/ThemeModel';
import { ApplyDarkModeUseCase } from '../../presentation/useCases/applyDarkModeUseCase';
import { FrameworkGraph } from '../../framework/di/FrameworkGraph';
import { type Window } from '../../framework/Window';

@Singleton() @Graph({ subgraphs: [FrameworkGraph] })
export class ThemeGraph extends ObjectGraph {
  @Provides()
  themeModel(applyDarkModeUseCase: ApplyDarkModeUseCase, window: Window) {
    return new ThemeModel(applyDarkModeUseCase, window);
  }

  @Provides()
  applyDarkModeUseCase(document: Document): ApplyDarkModeUseCase {
    return new ApplyDarkModeUseCase(document);
  }
}
