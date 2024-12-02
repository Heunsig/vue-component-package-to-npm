import { sum } from "./sum";
import { test, expect, describe } from "vitest";

// test the sum function using vitest
// wrap using describe
describe("sum", () => {
  test("sum", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("sum with negative values", () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});
