import test from "node:test";
import assert from "node:assert";

function longPressed(text, typed) {
  let i = 0,
    j = 0;
  while (j < typed.length) {
    if (i < text.length && text[i] === typed[j]) {
      i++;
      j++;
    } else if (j > 0 && typed[j] === typed[j - 1]) {
      j++;
    } else {
      return false;
    }
  }
  if (text === typed) {
    return false;
  }
  return true;
}

test("Return true if the printed message matches the original one, taking into account possible long keystrokes", (t) => {
  assert.strictEqual(longPressed("alex", "aaleex"), true);
});

test("Return true if the printed message matches the original one, taking into account possible long keystrokes", (t) => {
  assert.strictEqual(
    longPressed("there is an error here", "there is an errorrr hereaa"),
    false
  );
});
