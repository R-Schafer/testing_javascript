import test from "node:test";
import assert from "node:assert";

function isAllUpper(text) {
  return /(?=[A-Z]+)[A-Z\d ]+$/.test(text.trim());
}

test("Return true if the string is all caps", (t) => {
  assert.strictEqual(isAllUpper("ALL UPPER"), true);
});
test("Return false if the string is not all caps", (t) => {
  assert.strictEqual(isAllUpper("all lower"), false);
});
test("Return false if the string is not all caps", (t) => {
  assert.strictEqual(isAllUpper("mixed UPPER and lower"), false);
});
