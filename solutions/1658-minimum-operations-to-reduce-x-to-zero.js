/**
 * 1658. Minimum Operations to Reduce X to Zero
 * https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
 * Difficulty: Medium
 *
 * You are given an integer array nums and an integer x. In one operation, you can either remove
 * the leftmost or the rightmost element from the array nums and subtract its value from x. Note
 * that this modifies the array for future operations.
 *
 * Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise,
 * return -1.
 */

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
  const targetSum = nums.reduce((sum, num) => sum + num, 0) - x;
  if (targetSum < 0) return -1;
  if (targetSum === 0) return nums.length;

  let currentSum = 0;
  let maxLength = -1;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    while (currentSum > targetSum && left <= right) {
      currentSum -= nums[left];
      left++;
    }

    if (currentSum === targetSum) {
      maxLength = Math.max(maxLength, right - left + 1);
    }
  }

  return maxLength === -1 ? -1 : nums.length - maxLength;
};
