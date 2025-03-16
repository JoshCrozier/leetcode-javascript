/**
 * 805. Split Array With Same Average
 * https://leetcode.com/problems/split-array-with-same-average/
 * Difficulty: Hard
 *
 * You are given an integer array nums.
 *
 * You should move each element of nums into one of the two arrays A and B such that A and B are
 * non-empty, and average(A) == average(B).
 *
 * Return true if it is possible to achieve that and false otherwise.
 *
 * Note that for an array arr, average(arr) is the sum of all the elements of arr over the length
 * of arr.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArraySameAverage = function(nums) {
  if (nums.length <= 1) return false;
  const sum = nums.reduce((acc, num) => acc + num, 0);
  const dp = Array(Math.floor(nums.length / 2) + 1).fill().map(() => new Set());
  dp[0].add(0);

  for (const num of nums) {
    for (let size = Math.min(Math.floor(nums.length / 2), dp.length - 1); size > 0; size--) {
      for (const prevSum of dp[size - 1]) {
        dp[size].add(prevSum + num);
      }
    }
  }

  for (let size = 1; size <= Math.floor(nums.length / 2); size++) {
    const targetSum = sum * size / nums.length;

    if (targetSum % 1 === 0 && dp[size].has(targetSum)) {
      return true;
    }
  }

  return false;
};
