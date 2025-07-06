/**
 * 1933. Check if String Is Decomposable Into Value-Equal Substrings
 * https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/
 * Difficulty: Easy
 *
 * A value-equal string is a string where all characters are the same.
 * - For example, "1111" and "33" are value-equal strings.
 * - In contrast, "123" is not a value-equal string.
 *
 * Given a digit string s, decompose the string into some number of consecutive value-equal
 * substrings where exactly one substring has a length of 2 and the remaining substrings
 * have a length of 3.
 *
 * Return true if you can decompose s according to the above rules. Otherwise, return false.
 *
 * A substring is a contiguous sequence of characters in a string.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isDecomposable = function(s) {
  const groups = [];
  let i = 0;

  while (i < s.length) {
    let j = i;
    while (j < s.length && s[j] === s[i]) {
      j++;
    }
    groups.push(j - i);
    i = j;
  }

  let result = false;

  for (const length of groups) {
    if (length % 3 === 1) {
      return false;
    } else if (length % 3 === 2) {
      if (result) {
        return false;
      }
      result = true;
    }
  }

  return result;
};
