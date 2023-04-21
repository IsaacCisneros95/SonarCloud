import { sum } from "../utils";

describe("when calling sum", () => {
  it("returns the sum of the two number", () => {
    const result = sum(2, 2);

    expect(result).toBe(4);
  });
});
