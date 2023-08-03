import { Model, Observable } from 'react-obsidian';

export class ThemeModel extends Model {
  public readonly isDarkMode = new Observable(false);

  public toggleDarkMode() {
    this.isDarkMode.value = !this.isDarkMode.value;
  }
}
