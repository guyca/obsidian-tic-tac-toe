import { act, renderHook } from '@testing-library/react';
import { useSquareViewModel } from '../../../../../src/components/square/model/squareViewModel';
import { GameModel } from '../../../../../src/core/model/GameModel';
import { mockDeep } from 'jest-mock-extended';
import { when } from 'jest-when';
import { spyOnGetter } from '../../../../utils/spyOnGetter';
import { Observable } from 'react-obsidian';

describe('squareViewModel', () => {
  const index = 1;
  let squares: Observable<string[]>;
  let model: GameModel;

  beforeEach(() => {
    model = mockDeep<GameModel>();
    squares = new Observable(['A', 'B', 'C']);
    when(spyOnGetter(model, 'squares')).calledWith().mockReturnValue(squares);
  });

  const renderUut = () => {
    return renderHook(() => useSquareViewModel(index, model));
  };

  it('should delegate onClick to the model', () => {
    const { result } = renderUut();
    result.current.onClick();
    expect(model.onSquareClick).toHaveBeenCalledWith(index);
  });

  it('should return the text from the model', () => {
    const { result } = renderUut();
    expect(result.current.text).toEqual('B');
  });

  it('should re-render when the model changes', () => {
    const { result } = renderUut();
    act(() => {
      squares.value = ['D', 'E', 'F'];
    });
    expect(result.current.text).toEqual('E');
  });
});
