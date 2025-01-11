/**
 * 1679. Max Number of K-Sum Pairs
 * https://leetcode.com/problems/max-number-of-k-sum-pairs/
 * Difficulty: Medium
 *
 * You are given an integer array nums and an integer k.
 *
 * In one operation, you can pick two numbers from the array whose sum equals k and
 * remove them from the array.
 *
 * Return the maximum number of operations you can perform on the array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  const map = new Map();
  let result = 0;

  nums.forEach(n => {
    const diff = k - n;

    if (map.get(diff)) {
      result++;
      map.set(diff, map.get(diff) - 1);
    } else {
      map.set(n, (map.get(n) ?? 0) + 1);
    }
  });

  return result;
};
