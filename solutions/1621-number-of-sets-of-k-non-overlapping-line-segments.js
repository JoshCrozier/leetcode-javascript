/**
 * 1621. Number of Sets of K Non-Overlapping Line Segments
 * https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/
 * Difficulty: Medium
 *
 * Given n points on a 1-D plane, where the ith point (from 0 to n-1) is at x = i, find the number
 * of ways we can draw exactly k non-overlapping line segments such that each segment covers two
 * or more points. The endpoints of each segment must have integral coordinates. The k line segments
 * do not have to cover all n points, and they are allowed to share endpoints.
 *
 * Return the number of ways we can draw k non-overlapping line segments. Since this number can be
 * huge, return it modulo 109 + 7.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfSets = function(n, k) {
  const MOD = 1e9 + 7;
  const comb = Array.from({ length: n + k }, () => Array(n + k).fill(0));

  for (let i = 0; i < n + k; i++) {
    comb[i][0] = 1;
    for (let j = 1; j <= i; j++) {
      comb[i][j] = (comb[i - 1][j - 1] + comb[i - 1][j]) % MOD;
    }
  }

  return comb[n + k - 1][2 * k];
};
