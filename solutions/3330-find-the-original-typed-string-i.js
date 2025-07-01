/**
 * 3330. Find the Original Typed String I
 * https://leetcode.com/problems/find-the-original-typed-string-i/
 * Difficulty: Easy
 *
 * Alice is attempting to type a specific string on her computer. However, she tends to be
 * clumsy and may press a key for too long, resulting in a character being typed multiple times.
 *
 * Although Alice tried to focus on her typing, she is aware that she may still have done this
 * at most once.
 *
 * You are given a string word, which represents the final output displayed on Alice's screen.
 *
 * Return the total number of possible original strings that Alice might have intended to type.
 */

/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
  let result = 1;
  let consecutiveCount = 1;

  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i - 1]) {
      consecutiveCount++;
    } else {
      if (consecutiveCount > 1) {
        result += consecutiveCount - 1;
      }
      consecutiveCount = 1;
    }
  }

  if (consecutiveCount > 1) {
    result += consecutiveCount - 1;
  }

  return result;
};
