/**
 * 3520. Minimum Threshold for Inversion Pairs Count
 * https://leetcode.com/problems/minimum-threshold-for-inversion-pairs-count/
 * Difficulty: Medium
 *
 * You are given an array of integers nums and an integer k.
 *
 * An inversion pair with a threshold x is defined as a pair of indices (i, j) such that:
 * - i < j
 * - nums[i] > nums[j]
 * - The difference between the two numbers is at most x (i.e. nums[i] - nums[j] <= x).
 *
 * Your task is to determine the minimum integer min_threshold such that there are at least
 * k inversion pairs with threshold min_threshold.
 *
 * If no such integer exists, return -1.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minThreshold = function(nums, k) {
  const maxThreshold = Math.max(...nums) - Math.min(...nums) + 1;

  if (!countInversions(maxThreshold)) return -1;

  let left = 0;
  let right = maxThreshold;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (countInversions(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;

  function binarySearchLeft(arr, target) {
    let left = 0;
    let right = arr.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }

  function insertSorted(arr, val) {
    const index = binarySearchLeft(arr, val);
    arr.splice(index, 0, val);
  }

  function countInversions(threshold) {
    let count = 0;
    const sortedList = [];

    for (let i = nums.length - 1; i >= 0; i--) {
      const num = nums[i];
      const leftBound = num - threshold;
      const rightBound = num;
      const leftIndex = binarySearchLeft(sortedList, leftBound);
      const rightIndex = binarySearchLeft(sortedList, rightBound);

      count += rightIndex - leftIndex;
      if (count >= k) return true;

      insertSorted(sortedList, num);
    }

    return false;
  }
};
