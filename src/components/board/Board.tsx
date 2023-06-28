import { Square } from "../square/Square";

export const Board = () => {
  return (
    <div>
      <div className="board-row">
        <Square index={0} />
        <Square index={1} />
        <Square index={2} />
      </div>
      <div className="board-row">
        <Square index={3} />
        <Square index={4} />
        <Square index={5} />
      </div>
      <div className="board-row">
        <Square index={6} />
        <Square index={7} />
        <Square index={8} />
      </div>
    </div>
  );
};
