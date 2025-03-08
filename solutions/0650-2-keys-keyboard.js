/**
 * 650. 2 Keys Keyboard
 * https://leetcode.com/problems/2-keys-keyboard/
 * Difficulty: Medium
 *
 * There is only one character 'A' on the screen of a notepad. You can perform one of two
 * operations on this notepad for each step:
 * - Copy All: You can copy all the characters present on the screen (a partial copy is
 *   not allowed).
 * - Paste: You can paste the characters which are copied last time.
 *
 * Given an integer n, return the minimum number of operations to get the character 'A'
 * exactly n times on the screen.
 */

/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  let result = 0;

  for (let factor = 2; n > 1;) {
    while (n % factor === 0) {
      result += factor;
      n /= factor;
    }
    factor++;
  }

  return result;
};
