/**
 * 2563. Count the Number of Fair Pairs
 * https://leetcode.com/problems/count-the-number-of-fair-pairs/
 * Difficulty: Medium
 *
 * Given a 0-indexed integer array nums of size n and two integers lower and upper, return the
 * number of fair pairs.
 *
 * A pair (i, j) is fair if:
 * - 0 <= i < j < n, and
 * - lower <= nums[i] + nums[j] <= upper
 */

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
  let result = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    const minTarget = lower - nums[i];
    const maxTarget = upper - nums[i];

    const first = findFirstValidIndex(i + 1, minTarget);
    const last = findFirstValidIndex(i + 1, maxTarget + 1) - 1;

    if (first <= last) {
      result += last - first + 1;
    }
  }

  return result;

  function findFirstValidIndex(start, target) {
    let left = start;
    let right = nums.length - 1;
    let index = nums.length;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] >= target) {
        index = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return index;
  }
};
