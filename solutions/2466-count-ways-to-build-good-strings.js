/**
 * 2466. Count Ways To Build Good Strings
 * https://leetcode.com/problems/count-ways-to-build-good-strings/
 * Difficulty: Medium
 *
 * Given the integers zero, one, low, and high, we can construct a string by starting with an
 * empty string, and then at each step perform either of the following:
 * - Append the character '0' zero times.
 * - Append the character '1' one times.
 *
 * This can be performed any number of times.
 *
 * A good string is a string constructed by the above process having a length between low and
 * high (inclusive).
 *
 * Return the number of different good strings that can be constructed satisfying these properties.
 * Since the answer can be large, return it modulo 109 + 7.
 */

/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
  const modulo = 1e9 + 7;
  const dp = new Array(high + 1).fill(0);
  dp[0] = 1;

  for (let length = 1; length <= high; length++) {
    if (length >= zero) {
      dp[length] = (dp[length] + dp[length - zero]) % modulo;
    }
    if (length >= one) {
      dp[length] = (dp[length] + dp[length - one]) % modulo;
    }
  }

  let result = 0;
  for (let length = low; length <= high; length++) {
    result = (result + dp[length]) % modulo;
  }

  return result;
};
