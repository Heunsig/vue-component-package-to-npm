import { random } from "./random";
import { test, expect, describe } from "vitest";

// create random test for min and max
describe("random range tests", () => {
  test("random number should be between min and max inclusive", () => {
    const min = 1;
    const max = 10;
    const result = random(min, max);
    
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  test("random number should be an integer", () => {
    const result = random(1, 100);
    expect(Number.isInteger(result)).toBe(true);
  });

  test("multiple random calls should stay within range", () => {
    const min = -10;
    const max = 10;
    
    // Test multiple random generations
    for (let i = 0; i < 100; i++) {
      const result = random(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    }
  });
});


