import { Observable } from 'react-obsidian';
import { ColorScheme } from '../../types';
import { Window } from '../../../framework/Window';

export class PreferredColorScheme extends Observable<ColorScheme> {
  constructor(private window: Window) {
    super();
  }

  public init() {
    this.value = this.window.currentColorScheme;
    this.window.registerPreferredColorSchemeChangeListener((colorScheme) => {
      this.value = colorScheme;
    });
  }

  public get isDarkMode(): boolean {
    return this.value === 'dark';
  }
}
