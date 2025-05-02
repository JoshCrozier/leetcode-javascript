/**
 * 1864. Minimum Number of Swaps to Make the Binary String Alternating
 * https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/
 * Difficulty: Medium
 *
 * Given a binary string s, return the minimum number of character swaps to make it alternating,
 * or -1 if it is impossible.
 *
 * The string is called alternating if no two adjacent characters are equal. For example, the
 * strings "010" and "1010" are alternating, while the string "0100" is not.
 *
 * Any two characters may be swapped, even if they are not adjacent.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
  const length = s.length;
  let ones = 0;
  let zeros = 0;

  for (const char of s) {
    if (char === '1') ones++;
    else zeros++;
  }

  if (Math.abs(ones - zeros) > 1) return -1;

  let mismatchesStartWithZero = 0;
  let mismatchesStartWithOne = 0;

  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      if (s[i] !== '0') mismatchesStartWithZero++;
      if (s[i] !== '1') mismatchesStartWithOne++;
    } else {
      if (s[i] !== '1') mismatchesStartWithZero++;
      if (s[i] !== '0') mismatchesStartWithOne++;
    }
  }

  if (ones === zeros) {
    return Math.min(mismatchesStartWithZero, mismatchesStartWithOne) >> 1;
  }

  return (ones > zeros ? mismatchesStartWithOne : mismatchesStartWithZero) >> 1;
};
