import { useObserver } from 'react-obsidian';
import type { GameModel } from '../../../core/model/GameModel';

export type HistoryViewModel = () => ReturnType<typeof useHistoryViewModel>;

export const useHistoryViewModel = (model: GameModel) => {
  const [entries] = useObserver(model.history);
  return { entries };
};
