import test from "node:test";
import assert from "node:assert";

function chunkingBy(items, size) {
  let arr = [];
  let sep = [];
  if (size < 1 || items.length < 1) {
    return arr;
  }
  for (let i = 0; i < items.length; i++) {
    if (sep.length < size) {
      sep.push(items[i]);
    } else if (sep.length === size) {
      arr.push(sep);
      sep = [];
      sep.push(items[i]);
    }
    if (i === items.length - 1) {
      arr.push(sep);
    }
  }
  return arr;
}

test("split the array into smaller chunks (based on the size provided)", (t) => {
  assert.deepStrictEqual(chunkingBy([5, 4, 7, 3, 4, 5, 4], 3), [
    [5, 4, 7],
    [3, 4, 5],
    [4],
  ]);
});

test("split the array into smaller chunks (based on the size provided)", (t) => {
  assert.deepStrictEqual(chunkingBy([3, 4, 5], 1), [[3], [4], [5]]);
});
