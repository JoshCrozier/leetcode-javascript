/**
 * 788. Rotated Digits
 * https://leetcode.com/problems/rotated-digits/
 * Difficulty: Medium
 *
 * An integer x is a good if after rotating each digit individually by 180 degrees, we get a valid
 * number that is different from x. Each digit must be rotated - we cannot choose to leave it alone.
 *
 * A number is valid if each digit remains a digit after rotation. For example:
 * - 0, 1, and 8 rotate to themselves,
 * - 2 and 5 rotate to each other (in this case they are rotated in a different direction, in other
 *   words, 2 or 5 gets mirrored),
 * - 6 and 9 rotate to each other, and
 * - the rest of the numbers do not rotate to any other number and become invalid.
 *
 * Given an integer n, return the number of good integers in the range [1, n].
 */

/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    if (verify(i)) {
      result++;
    }
  }

  return result;

  function verify(num) {
    const digits = num.toString().split('');
    let result = false;

    for (const digit of digits) {
      if (digit === '3' || digit === '4' || digit === '7') {
        return false;
      }

      if (digit === '2' || digit === '5' || digit === '6' || digit === '9') {
        result = true;
      }
    }

    return result;
  }
};
