import { ThemeModel } from '../../../presentation/model/ThemeModel';

export const topBarViewModel = (themeModel: ThemeModel) => {
  return {
    toggleDarkMode: () => themeModel.toggleDarkMode(),
  };
};
