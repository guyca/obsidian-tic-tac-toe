import { Squares } from "../../../../src/core/entities/Squares";

describe("Squares", () => {
  it("should set the initial squares", () => {
    const squares = new Squares();
    expect(squares.value).toEqual(Array.from({ length: 9 }));
  });

  it("should be able to mark a square", () => {
    const squares = new Squares();
    squares.mark(0, "X");
    expect(squares.value).toEqual(["X", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
  });
});
