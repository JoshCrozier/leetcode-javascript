/**
 * 259. 3Sum Smaller
 * https://leetcode.com/problems/3sum-smaller/
 * Difficulty: Medium
 *
 * Given an array of n integers nums and an integer target, find the number of index triplets
 * i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let result = 0;

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum < target) {
        result += right - left;
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};
