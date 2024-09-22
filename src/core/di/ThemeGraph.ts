import { graph, ObjectGraph, provides, singleton } from 'react-obsidian';
import { ThemeModel } from '../../presentation/model/ThemeModel';
import { ApplyDarkModeUseCase } from '../../presentation/useCases/applyDarkModeUseCase';
import { FrameworkGraph } from '../../framework/di/FrameworkGraph';
import { type Window } from '../../framework/Window';

@singleton() @graph({ subgraphs: [FrameworkGraph] })
export class ThemeGraph extends ObjectGraph {
  @provides()
  themeModel(applyDarkModeUseCase: ApplyDarkModeUseCase, window: Window) {
    return new ThemeModel(applyDarkModeUseCase, window);
  }

  @provides()
  applyDarkModeUseCase(document: Document): ApplyDarkModeUseCase {
    return new ApplyDarkModeUseCase(document);
  }
}
