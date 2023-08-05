import { useObserver } from 'react-obsidian';
import { GameModel } from '../core/model/GameModel';
import { ThemeModel } from '../presentation/model/ThemeModel';
import { useComponentDidMount } from '../utils/useComponentDidMount';

export const useAppViewModel = (model: GameModel, themeModel: ThemeModel) => {
  const [isReady, setIsReady] = useObserver(model.isReady);

  useComponentDidMount(() => {
    themeModel.init();
    setIsReady(true);
  });

  return { isReady };
};
