import { act, renderHook } from '@testing-library/react';
import { useStatusViewModel } from '../../../../../src/components/status/model/statusViewModel';
import { GameModel } from '../../../../../src/core/model/GameModel';
import { MediatorObservable, mockModel } from 'react-obsidian';

describe('statusViewModel', () => {
  let model: GameModel;

  beforeEach(() => {
    model = mockModel({
      status: new MediatorObservable('foo'),
    });
  });

  const renderUut = () => {
    return renderHook(() => useStatusViewModel(model));
  };

  it('should return the status from the model', () => {
    const { result } = renderUut();
    expect(result.current.status).toEqual('foo');
  });

  it('should re-render when the model changes', () => {
    const { result } = renderUut();
    act(() => (model.status.value = 'bar'));
    expect(result.current.status).toEqual('bar');
  });
});
