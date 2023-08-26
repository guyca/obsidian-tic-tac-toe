import { Window } from '../../../src/framework/Window';
import { Interface } from '../../../src/utils/type';

export class FakeWindow implements Interface<Window> {
  public get currentColorScheme(): 'dark' | 'light' {
    return 'light';
  }

  public get isDarkMode(): boolean {
    return false;
  }

  public registerPreferredColorSchemeChangeListener(
    onColorSchemeChange: (colorScheme: 'dark' | 'light') => void,
  ): void {
    // noop
  }
}
