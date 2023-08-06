import { mock, mockDeep } from 'jest-mock-extended';
import { Window } from '../../../src/framework/Window';
import { when } from 'jest-when';

describe('Window', () => {
  let uut: Window;
  let systemWindow: typeof window;

  beforeEach(() => {
    systemWindow = mock();
    mockColorScheme('light');
    uut = new Window(systemWindow);
  });

  it('should get the current color scheme', () => {
    mockColorScheme('light');
    expect(uut.currentColorScheme).toBe('light');
  });

  it('should return true if the color scheme is dark', () => {
    mockColorScheme('dark');
    expect(uut.isDarkMode).toBe(true);
  });

  it('should register the color scheme change listener', () => {
    const addListener = jest.fn();
    mockColorScheme('light', addListener);

    uut.registerPreferredColorSchemeChangeListener(jest.fn());
    expect(addListener).toBeCalledTimes(1);
  });

  function mockColorScheme(
    scheme: 'dark' | 'light',
    addListener: jest.Mock = jest.fn(),
  ) {
    const mockMediaQueryList: Partial<MediaQueryList> = {
      matches: scheme === 'dark',
      addListener,
    };
    when(systemWindow.matchMedia)
      .calledWith('(prefers-color-scheme: dark)')
      .mockReturnValue(mockMediaQueryList as MediaQueryList);
  }
});
