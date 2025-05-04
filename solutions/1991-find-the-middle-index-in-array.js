/**
 * 1991. Find the Middle Index in Array
 * https://leetcode.com/problems/find-the-middle-index-in-array/
 * Difficulty: Easy
 *
 * Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst
 * all the possible ones).
 *
 * A middleIndex is an index where nums[0] + nums[1] + ... +
 * nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].
 *
 * If middleIndex == 0, the left side sum is considered to be 0. Similarly, if
 * middleIndex == nums.length - 1, the right side sum is considered to be 0.
 *
 * Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
  let left = 0;
  let right = nums.reduce((sum, n) => sum + n, 0);

  for (let i = 0; i < nums.length; i++) {
    left += nums[i];
    right -= nums[i];
    if (left - nums[i] === right) {
      return i;
    }
  }

  return -1;
};
