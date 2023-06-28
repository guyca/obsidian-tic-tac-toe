import { DependenciesOf, injectComponent } from "react-obsidian";
import { SquareGraph } from "./di/SquareGraph";

export type Props = { index: number };
type Injected = DependenciesOf<SquareGraph, 'useViewModel'>;

const _Square = ({useViewModel}: Injected) => {
  const {text, onClick} = useViewModel();

  return (
    <button className="square" onClick={onClick}>{text}</button>
  );
};

export const Square = injectComponent<Props, Injected>(_Square, SquareGraph);
