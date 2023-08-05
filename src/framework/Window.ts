export class Window {
  public get currentColorScheme(): 'dark' | 'light' {
    return this.isDarkMode ? 'dark' : 'light';
  }

  public get isDarkMode(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  public registerPreferredColorSchemeChangeListener(
    onColorSchemeChange: (colorScheme: 'dark' | 'light') => void,
  ) {
    window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
      onColorSchemeChange(e.matches ? 'dark' : 'light');
    });
  }
}
