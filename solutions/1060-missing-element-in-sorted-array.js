/**
 * 1060. Missing Element in Sorted Array
 * https://leetcode.com/problems/missing-element-in-sorted-array/
 * Difficulty: Medium
 *
 * Given an integer array nums which is sorted in ascending order and all of its elements are
 * unique and given also an integer k, return the kth missing number starting from the leftmost
 * number of the array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) {
  const n = nums.length;

  if (k > getMissingCount(n - 1)) {
    return nums[n - 1] + k - getMissingCount(n - 1);
  }

  let left = 0;
  let right = n - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (getMissingCount(mid) < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left - 1] + k - getMissingCount(left - 1);

  function getMissingCount(index) {
    return nums[index] - nums[0] - index;
  }
};
