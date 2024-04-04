import { type Window } from '../../../src/framework/Window';
import { type Interface } from '../../../src/utils/type';

export class FakeWindow implements Interface<Window> {
  public get currentColorScheme(): 'dark' | 'light' {
    return 'light';
  }

  public get isDarkMode(): boolean {
    return false;
  }

  public registerPreferredColorSchemeChangeListener(
    _onColorSchemeChange: (colorScheme: 'dark' | 'light') => void,
  ): void {
    // noop
  }
}
