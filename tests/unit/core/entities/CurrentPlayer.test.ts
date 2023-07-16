import { CurrentPlayer } from "../../../../src/core/entities/CurrentPlayer";

describe("CurrentPlayer", () => {
  it("should set X as the starting player", () => {
    const player = new CurrentPlayer();
    expect(player.value).toEqual("X");
  });

  it("should be able to change the current player", () => {
    const player = new CurrentPlayer();
    player.nextPlayer();
    expect(player.value).toEqual("O");
  });
});