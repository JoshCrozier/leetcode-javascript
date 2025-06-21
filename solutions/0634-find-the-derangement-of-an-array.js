/**
 * 634. Find the Derangement of An Array
 * https://leetcode.com/problems/find-the-derangement-of-an-array/
 * Difficulty: Medium
 *
 * In combinatorial mathematics, a derangement is a permutation of the elements of a set,
 * such that no element appears in its original position.
 *
 * You are given an integer n. There is originally an array consisting of n integers from
 * 1 to n in ascending order, return the number of derangements it can generate. Since the
 * answer may be huge, return it modulo 109 + 7.
 */

/**
 * @param {number} n
 * @return {number}
 */
var findDerangement = function(n) {
  const MOD = 1e9 + 7;
  if (n === 1) return 0;
  if (n === 2) return 1;

  let prev2 = 0;
  let prev1 = 1;
  for (let i = 3; i <= n; i++) {
    const current = ((i - 1) * (prev1 + prev2)) % MOD;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
};
