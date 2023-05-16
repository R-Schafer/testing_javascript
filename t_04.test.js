import test from "node:test";
import assert from "node:assert";

function compress(items) {
  let arr = [];
  if (items.length > 0) {
    arr.push(items[0]);
  }
  for (let i = 0; i < items.length; i++) {
    if (items[i] != arr[arr.length - 1]) {
      arr.push(items[i]);
    }
  }

  return arr;
}

test("removing numbers and compressing the array so the same number isn't back to back", (t) => {
  assert.deepStrictEqual(
    compress([5, 5, 5, 4, 5, 6, 6, 5, 5, 7, 8, 0, 0]),
    [5, 4, 5, 6, 5, 7, 8, 0]
  );
});

test("removing numbers and compressing the array so the same number isn't back to back", (t) => {
  assert.deepStrictEqual(
    compress([9, 9, 9, 9, 9, 9, 9, 0, 9, 9, 9, 9, 9, 9]),
    [9, 0, 9]
  );
});
