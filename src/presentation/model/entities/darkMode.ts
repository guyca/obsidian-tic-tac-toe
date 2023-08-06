import { Observable } from 'react-obsidian';
import { ColorScheme } from '../../types';

export class DarkMode extends Observable<ColorScheme> {
  public toggle() {
    this.value = this.isDarkMode ? 'light' : 'dark';
  }

  public get isDarkMode(): boolean {
    return this.value === 'dark';
  }

  public get theme(): Omit<ColorScheme, 'no-preference'> {
    return this.isDarkMode ? 'dark' : 'light';
  }
}
