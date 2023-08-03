import { mock } from 'jest-mock-extended';
import { topBarViewModel } from '../../../../../src/components/topBar/model/topBarViewModel';
import { ThemeModel } from '../../../../../src/lib/ui/model/ThemeModel';

describe('topBarViewModel', () => {
  let uut: ReturnType<typeof topBarViewModel>;
  let themeModel: ThemeModel;

  beforeEach(() => {
    themeModel = mock();
    uut = topBarViewModel(themeModel);
  });

  it('should call themeModel.toggleDarkMode() when toggleDarkMode() is called', () => {
    uut.toggleDarkMode();
    expect(themeModel.toggleDarkMode).toHaveBeenCalledTimes(1);
  });
});
