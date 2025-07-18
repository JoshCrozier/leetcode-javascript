/**
 * 3231. Minimum Number of Increasing Subsequence to Be Removed
 * https://leetcode.com/problems/minimum-number-of-increasing-subsequence-to-be-removed/
 * Difficulty: Hard
 *
 * Given an array of integers nums, you are allowed to perform the following operation any
 * number of times:
 * - Remove a strictly increasing subsequence from the array.
 *
 * Your task is to find the minimum number of operations required to make the array empty.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  const dp = [nums[nums.length - 1]];

  for (let i = nums.length - 2; i >= 0; i--) {
    const currentNum = nums[i];

    if (currentNum >= dp[dp.length - 1]) {
      dp.push(currentNum);
    } else {
      const insertionIndex = binarySearchRight(dp, currentNum);
      dp[insertionIndex] = currentNum;
    }
  }

  return dp.length;

  function binarySearchRight(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  }
};
