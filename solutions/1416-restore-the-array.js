/**
 * 1416. Restore The Array
 * https://leetcode.com/problems/restore-the-array/
 * Difficulty: Hard
 *
 * A program was supposed to print an array of integers. The program forgot to print whitespaces
 * and the array is printed as a string of digits s and all we know is that all integers in the
 * array were in the range [1, k] and there are no leading zeros in the array.
 *
 * Given the string s and the integer k, return the number of the possible arrays that can be
 * printed as s using the mentioned program. Since the answer may be very large, return it modulo
 * 109 + 7.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function numberOfArrays(s, k) {
  const MOD = 1e9 + 7;
  const dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= s.length; i++) {
    let num = 0;
    for (let j = i - 1; j >= Math.max(0, i - String(k).length); j--) {
      if (j < 0) break;
      num = Number(s[j]) * Math.pow(10, i - j - 1) + num;
      if (num <= k && (s[j] !== '0')) {
        dp[i] = (dp[i] + dp[j]) % MOD;
      }
    }
  }

  return dp[s.length];
}
