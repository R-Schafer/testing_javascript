import test from "node:test";
import assert from "node:assert";

function replaceBiggest(data) {
  let arr = [];
  if (data.length < 1) {
    return arr;
  }
  let biggest = data[data.length - 1];
  for (let i = data.length - 1; i > 0; i--) {
    if (biggest < data[i - 1]) {
      arr.unshift(biggest);
      biggest = data[i - 1];
    } else if (biggest >= data[i - 1]) {
      arr.unshift(biggest);
    }
  }
  arr.push(-1);
  return arr;
}

test("Replace every element in array with the biggest element among the elements to its strict right (not including current element)", (t) => {
  assert.deepStrictEqual(
    replaceBiggest([17, 18, 5, 4, 6, 1]),
    [18, 6, 6, 6, 1, -1]
  );
});

test("Replace every element in array with the biggest element among the elements to its strict right (not including current element)", (t) => {
  assert.deepStrictEqual(
    replaceBiggest([1, 2, 3, 4, 5, 6]),
    [6, 6, 6, 6, 6, -1]
  );
});
