/**
 * 2784. Check if Array is Good
 * https://leetcode.com/problems/check-if-array-is-good/
 * Difficulty: Easy
 *
 * You are given an integer array nums. We consider an array good if it is a permutation of
 * an array base[n].
 *
 * base[n] = [1, 2, ..., n - 1, n, n] (in other words, it is an array of length n + 1 which
 * contains 1 to n - 1 exactly once, plus two occurrences of n). For example, base[1] = [1, 1]
 * and base[3] = [1, 2, 3, 3].
 *
 * Return true if the given array is good, otherwise return false.
 *
 * Note: A permutation of integers represents an arrangement of these numbers.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
  const n = Math.max(...nums);
  if (nums.length !== n + 1) return false;

  const frequency = new Array(n + 1).fill(0);
  for (const num of nums) {
    if (num > n) return false;
    frequency[num]++;
  }

  for (let i = 1; i < n; i++) {
    if (frequency[i] !== 1) return false;
  }
  return frequency[n] === 2;
};
