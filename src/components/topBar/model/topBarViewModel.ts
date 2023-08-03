import { ThemeModel } from '../../../lib/ui/model/ThemeModel';

export const topBarViewModel = (themeModel: ThemeModel) => {
  return {
    toggleDarkMode: () => themeModel.toggleDarkMode(),
  };
};
