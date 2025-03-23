/**
 * 903. Valid Permutations for DI Sequence
 * https://leetcode.com/problems/valid-permutations-for-di-sequence/
 * Difficulty: Hard
 *
 * You are given a string s of length n where s[i] is either:
 * - 'D' means decreasing, or
 * - 'I' means increasing.
 *
 * A permutation perm of n + 1 integers of all the integers in the range [0, n] is called a
 * valid permutation if for all valid i:
 * - If s[i] == 'D', then perm[i] > perm[i + 1], and
 * - If s[i] == 'I', then perm[i] < perm[i + 1].
 *
 * Return the number of valid permutations perm. Since the answer may be large, return it
 * modulo 109 + 7.
 */

/**
 * @param {string} s
 * @return {number}
 */
var numPermsDISequence = function(s) {
  const MOD = 1e9 + 7;
  const n = s.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

  dp[0][0] = 1;

  for (let len = 1; len <= n; len++) {
    for (let curr = 0; curr <= len; curr++) {
      if (s[len - 1] === 'D') {
        for (let prev = curr; prev < len; prev++) {
          dp[len][curr] = (dp[len][curr] + dp[len - 1][prev]) % MOD;
        }
      } else {
        for (let prev = 0; prev < curr; prev++) {
          dp[len][curr] = (dp[len][curr] + dp[len - 1][prev]) % MOD;
        }
      }
    }
  }

  let result = 0;
  for (let num = 0; num <= n; num++) {
    result = (result + dp[n][num]) % MOD;
  }

  return result;
};
