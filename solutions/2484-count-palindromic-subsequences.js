/**
 * 2484. Count Palindromic Subsequences
 * https://leetcode.com/problems/count-palindromic-subsequences/
 * Difficulty: Hard
 *
 * Given a string of digits s, return the number of palindromic subsequences of s having length 5.
 * Since the answer may be very large, return it modulo 109 + 7.
 *
 * Note:
 * - A string is palindromic if it reads the same forward and backward.
 * - A subsequence is a string that can be derived from another string by deleting some or no
 *   characters without changing the order of the remaining characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var countPalindromes = function(s) {
  const MOD = 1e9 + 7;
  const n = s.length;

  const prefixPairs = new Array(n).fill(0).map(() => new Array(100).fill(0));
  const suffixPairs = new Array(n).fill(0).map(() => new Array(100).fill(0));

  for (let i = 1; i < n; i++) {
    for (let pair = 0; pair < 100; pair++) {
      prefixPairs[i][pair] = prefixPairs[i - 1][pair];
    }
    for (let j = 0; j < i; j++) {
      const pair = parseInt(s[j]) * 10 + parseInt(s[i]);
      prefixPairs[i][pair]++;
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let pair = 0; pair < 100; pair++) {
      suffixPairs[i][pair] = suffixPairs[i + 1][pair];
    }
    for (let j = i + 1; j < n; j++) {
      const pair = parseInt(s[i]) * 10 + parseInt(s[j]);
      suffixPairs[i][pair]++;
    }
  }

  let result = 0;
  for (let i = 2; i < n - 2; i++) {
    for (let first = 0; first < 10; first++) {
      for (let second = 0; second < 10; second++) {
        const leftPair = first * 10 + second;
        const rightPair = second * 10 + first;
        result = (result + (prefixPairs[i - 1][leftPair]
          * suffixPairs[i + 1][rightPair]) % MOD) % MOD;
      }
    }
  }

  return result;
};
