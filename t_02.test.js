import test from "node:test";
import assert from "node:assert";

function wordsOrder(text, words) {
  let textArr = text.split(" ");

  if (textArr.length === 0) {
    return false;
  } else if (words.length === 1 && !textArr.includes(words[0])) {
    return false;
  } else if (words.length === 2) {
    if (textArr.indexOf(words[0]) === -1 || textArr.indexOf(words[1]) === -1) {
      return false;
    } else {
      if (textArr.indexOf(words[0]) >= textArr.indexOf(words[1])) {
        return false;
      }
    }
  } else {
    for (let i = 0; i < words.length - 1; i++) {
      if (
        textArr.indexOf(words[i]) >= textArr.indexOf(words[words.length - 1]) ||
        textArr.indexOf(words[i]) >= textArr.indexOf(words[i + 1])
      ) {
        return false;
      }
    }
  }
  return true;
}

test("returns true if the words are in order within the string", (t) => {
  assert.strictEqual(wordsOrder("hi world im here", ["world", "here"]), true);
});

test("returns false if the words are not in order within the string", (t) => {
  assert.strictEqual(wordsOrder("hi world im here", ["here", "im"]), false);
});
