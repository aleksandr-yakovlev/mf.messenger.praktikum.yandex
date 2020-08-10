import { isEqual } from "./isEqual";

describe("isEqual", () => {
  it("должны совпадать значения", () => {
    expect(isEqual("1", "2")).toBe(false);
    expect(isEqual("false", "false")).toBe(true);
  });
});
