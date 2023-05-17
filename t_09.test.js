import test from "node:test";
import assert from "node:assert";

function absoluteSorting(values) {
  return values.sort((a, b) => Math.abs(a) - Math.abs(b));
}

test("Sort by absolute value in ascending order", (t) => {
  assert.deepStrictEqual(absoluteSorting([-20, -5, 10, 15]), [-5, 10, 15, -20]);
});

test("Sort by absolute value in ascending order", (t) => {
  assert.deepStrictEqual(absoluteSorting([-1, -2, -3, 0]), [0, -1, -2, -3]);
});
