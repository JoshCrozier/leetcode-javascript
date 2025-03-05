/**
 * 532. K-diff Pairs in an Array
 * https://leetcode.com/problems/k-diff-pairs-in-an-array/
 * Difficulty: Medium
 *
 * Given an array of integers nums and an integer k, return the number of unique k-diff
 * pairs in the array.
 *
 * A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:
 * - 0 <= i, j < nums.length
 * - i != j
 * - |nums[i] - nums[j]| == k
 *
 * Notice that |val| denotes the absolute value of val.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  const map = new Map();
  let result = 0;

  for (const num of nums) {
    if (!map.has(num)) {
      if (!k) {
        map.set(num, 1);
      } else {
        if (map.has(num - k)) result++;
        if (map.has(num + k)) result++;
        map.set(num, 1);
      }
    } else if (!k && map.get(num) === 1) {
      result++;
      map.set(num, 2);
    }
  }

  return result;
};
