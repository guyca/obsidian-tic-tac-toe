import { act, renderHook } from "@testing-library/react";
import { useStatusViewModel } from "../../../../../src/components/status/model/statusViewModel";
import { GameModel } from "../../../../../src/core/model/GameModel";
import { mock } from "jest-mock-extended";
import { when } from "jest-when";
import { spyOnGetter } from "../../../../utils/spyOnGetter";
import { Observable } from "react-obsidian";

describe("statusViewModel", () => {
  let model: GameModel;
  let status: Observable<string>;

  beforeEach(() => {
    model = mock<GameModel>();
    status = new Observable("foo");

    when(spyOnGetter(model, "status"))
      .calledWith()
      .mockReturnValue(status)
  });

  const renderUut = () => {
    return renderHook(() => useStatusViewModel(model));
  }

  it("should return the status from the model", () => {
    const { result } = renderUut();
    expect(result.current.status).toEqual("foo");
  });

  it("should re-render when the model changes", () => {
    const { result } = renderUut();
    act(() => status.value = "bar");
    expect(result.current.status).toEqual("bar");
  });
});
