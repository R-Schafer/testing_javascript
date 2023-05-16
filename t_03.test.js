import test from "node:test";
import assert from "node:assert";

function moveZeros(items) {
  let arr = [];
  let counter = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i] !== 0) {
      arr.push(items[i]);
    } else {
      counter += 1;
    }
  }
  if (counter > 0) {
    for (let i = 0; i < counter; i++) {
      arr.push(0);
    }
  }
  return arr;
}

test("move all zeros to the end of the array while keeping the other numbers in the same order", (t) => {
  assert.deepEqual(moveZeros([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0]);
});

test("move all zeros to the end of the array while keeping the other numbers in the same order", (t) => {
  assert.deepEqual(moveZeros([0]), [0]);
});
