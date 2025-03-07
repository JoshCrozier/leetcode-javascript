/**
 * 600. Non-negative Integers without Consecutive Ones
 * https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/
 * Difficulty: Hard
 *
 * Given a positive integer n, return the number of the integers in the range [0, n] whose
 * binary representations do not contain consecutive ones.
 */

/**
 * @param {number} n
 * @return {number}
 */
var findIntegers = function(n) {
  const binary = n.toString(2);
  const dp = new Array(binary.length + 1).fill(0);
  let result = 0;

  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i <= binary.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  for (let i = 0, previous = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      result += dp[binary.length - i - 1];
      if (previous === 1) {
        return result;
      }
      previous = 1;
    } else {
      previous = 0;
    }
  }

  return result + 1;
};
