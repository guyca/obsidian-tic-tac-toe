import { MediatorObservable, Model } from 'react-obsidian';
import { ApplyDarkModeUseCase } from '../useCases/applyDarkModeUseCase';
import { Window } from '../../framework/Window';
import { PreferredColorScheme } from './entities/PreferredColorScheme';

export class ThemeModel extends Model {
  public readonly isDarkMode = new MediatorObservable<boolean>();
  private preferredColorScheme!: PreferredColorScheme;

  constructor(
    private readonly applyDarkModeUseCase: ApplyDarkModeUseCase,
    window: Window,
  ) {
    super();
    this.preferredColorScheme = new PreferredColorScheme(window);
    this.isDarkMode.mapSource(this.preferredColorScheme, () => {
      return this.preferredColorScheme.isDarkMode;
    });
  }

  public init() {
    this.preferredColorScheme.init();
  }

  public toggleDarkMode() {
    this.isDarkMode.value = !this.isDarkMode.value;
    this.applyDarkModeUseCase.execute(this.isDarkMode.value ? 'dark' : 'light');
  }
}
