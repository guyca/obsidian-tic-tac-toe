import { GameModel } from '../../../core/model/GameModel';

export type StatusViewModel = () => ReturnType<typeof useStatusViewModel>;

export const useStatusViewModel = (model: GameModel) => {
  const { status } = model.use();
  return { status };
};
