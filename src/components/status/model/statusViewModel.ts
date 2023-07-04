import { useObserver } from "react-obsidian";
import { GameModel } from "../../../core/model/GameModel";

export type StatusViewModel = () => ReturnType<typeof useStatusViewModel>;

export const useStatusViewModel = (model: GameModel) => {
  const [status] = useObserver(model.status);
  return { status }
}