import test from "node:test";
import assert from "node:assert";

const longestCommonPrefix = function (strs) {
  let word = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j - 1][i] !== strs[j][i]) {
        return word;
      }
    }
    word += strs[0][i];
  }

  return word;
};

test("finds the longest common prefix from a list of words", (t) => {
  assert.strictEqual(longestCommonPrefix(["fat", "fa", "fault"]), "fa");
});
