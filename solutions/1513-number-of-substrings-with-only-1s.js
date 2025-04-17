/**
 * 1513. Number of Substrings With Only 1s
 * https://leetcode.com/problems/number-of-substrings-with-only-1s/
 * Difficulty: Medium
 *
 * Given a binary string s, return the number of substrings with all characters 1's. Since the
 * answer may be too large, return it modulo 109 + 7.
 */

/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
  const MOD = 1e9 + 7;
  let result = 0;
  let consecutiveOnes = 0;

  for (const char of s) {
    if (char === '1') {
      consecutiveOnes++;
      result = (result + consecutiveOnes) % MOD;
    } else {
      consecutiveOnes = 0;
    }
  }

  return result;
};
