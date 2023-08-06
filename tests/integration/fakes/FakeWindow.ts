import type { Window } from '../../../src/framework/Window';

export class FakeWindow implements Omit<Window, 'prototype'> {
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
