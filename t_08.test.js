import test from "node:test";
import assert from "node:assert";

function isAscending(values) {
  if (String(values) === String([]) || values.length === 1) {
    return true;
  }
  for (let i = 0; i < values.length; i++) {
    if (values[i] >= values[i + 1]) {
      return false;
    }
  }
  return true;
}

test("Determine whether the Array of elements is ascending such that each of its elements is strictly larger than (and not merely equal to) the preceding element", (t) => {
  assert.strictEqual(isAscending([-5, 10, 99, 123456]), true);
});

test("Determine whether the Array of elements is ascending such that each of its elements is strictly larger than (and not merely equal to) the preceding element", (t) => {
  assert.strictEqual(isAscending([99]), true);
});

test("Determine whether the Array of elements is ascending such that each of its elements is strictly larger than (and not merely equal to) the preceding element", (t) => {
  assert.strictEqual(isAscending([4, 5, 6, 7, 3, 7, 9]), false);
});
