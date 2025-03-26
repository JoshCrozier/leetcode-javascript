/**
 * 930. Binary Subarrays With Sum
 * https://leetcode.com/problems/binary-subarrays-with-sum/
 * Difficulty: Medium
 *
 * Given a binary array nums and an integer goal, return the number of non-empty subarrays
 * with a sum goal.
 *
 * A subarray is a contiguous part of the array.
 */

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
  const map = new Map([[0, 1]]);
  let result = 0;
  let sum = 0;

  for (const num of nums) {
    sum += num;
    result += map.get(sum - goal) || 0;
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return result;
};
