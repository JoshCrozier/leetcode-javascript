/**
 * 1806. Minimum Number of Operations to Reinitialize a Permutation
 * https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/
 * Difficulty: Medium
 *
 * You are given an even integer n. You initially have a permutation perm of size n where
 * perm[i] == i (0-indexed).
 *
 * In one operation, you will create a new array arr, and for each i:
 * - If i % 2 == 0, then arr[i] = perm[i / 2].
 * - If i % 2 == 1, then arr[i] = perm[n / 2 + (i - 1) / 2].
 *
 * You will then assign arr to perm.
 *
 * Return the minimum non-zero number of operations you need to perform on perm to return the
 * permutation to its initial value.
 */

/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function(n) {
  let currentIndex = 1;
  let result = 0;

  do {
    if (currentIndex % 2 === 0) {
      currentIndex = currentIndex / 2;
    } else {
      currentIndex = n / 2 + (currentIndex - 1) / 2;
    }
    result++;
  } while (currentIndex !== 1);

  return result;
};
