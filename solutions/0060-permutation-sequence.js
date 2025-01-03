/**
 * 60. Permutation Sequence
 * https://leetcode.com/problems/permutation-sequence/
 * Difficulty: Hard
 *
 * The set [1, 2, 3, ..., n] contains a total of n! unique permutations.
 *
 * By listing and labeling all of the permutations in order, we get the
 * following sequence for n = 3:
 * - "123"
 * - "132"
 * - "213"
 * - "231"
 * - "312"
 * - "321"
 *
 * Given n and k, return the kth permutation sequence.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const factorial = [1];
  for (let i = 1; i < n; i++) {
    factorial[i] = factorial[i-1] * i;
  }

  const values = new Array(n).fill(0).map((_, i) => i + 1);
  let result = '';
  k--;

  for (let i = n - 1; i >= 0; i--) {
    const index = Math.floor(k / factorial[i]);
    k = k % factorial[i];
    result += values[index];
    values.splice(index, 1);
  }

  return result;
};
