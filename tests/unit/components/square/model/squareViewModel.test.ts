import { renderHook } from "@testing-library/react";
import { useSquareViewModel } from "../../../../../src/components/square/model/squareViewModel";
import { GameModel } from "../../../../../src/core/model/GameModel";
import { mockDeep } from "jest-mock-extended";
import { when } from "jest-when";
import { spyOnGetter } from "../../../../utils/spyOnGetter";

describe('squareViewModel', () => {
  const index = 1;
  let model: GameModel;

  beforeEach(() => {
    model = mockDeep<GameModel>();
    when(spyOnGetter(model.squares, 'value'))
      .calledWith()
      .mockReturnValue(['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']);
  });

  const renderUut = () => {
    return renderHook(() => useSquareViewModel(index, model));
  }

  it('should delegate onClick to the model', () => {
    const { result } = renderUut();
    result.current.onClick();
    expect(model.onSquareClick).toHaveBeenCalledWith(index);
  });
});
