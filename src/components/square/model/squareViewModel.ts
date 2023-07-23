import { useObserver } from "react-obsidian"
import { GameModel } from "../../../core/model/GameModel";

export type squareViewModel = () => ReturnType<typeof useSquareViewModel>;

export const useSquareViewModel = (index: number, model: GameModel) => {
  const [squares] = useObserver(model.squares);

  return {
    onClick: () => model.onSquareClick(index),
    text: squares[index],
    testId: `square-${index}`
  }
}