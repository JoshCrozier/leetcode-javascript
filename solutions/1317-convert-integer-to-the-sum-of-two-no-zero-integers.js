/**
 * 1317. Convert Integer to the Sum of Two No-Zero Integers
 * https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/
 * Difficulty: Easy
 *
 * Given an integer n. No-Zero integer is a positive integer which
 * doesn't contain any 0 in its decimal representation.
 *
 * Return a list of two integers [A, B] where:
 *
 * - A and B are No-Zero integers.
 * - A + B = n
 *
 * It's guarateed that there is at least one valid solution.
 * If there are many valid solutions you can return any of them.
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
  const hasNoZero = n => String(n).indexOf('0') === -1;
  for (let i = n; i; --i) {
    if (hasNoZero(i) && hasNoZero(n - i)) {
      return [i, n - i];
    }
  }
};
