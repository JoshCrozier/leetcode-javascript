/**
 * 740. Delete and Earn
 * https://leetcode.com/problems/delete-and-earn/
 * Difficulty: Medium
 *
 * You are given an integer array nums. You want to maximize the number of points you get by
 * performing the following operation any number of times:
 * - Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every
 *   element equal to nums[i] - 1 and every element equal to nums[i] + 1.
 *
 * Return the maximum number of points you can earn by applying the above operation some number
 * of times.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  const points = new Array(10001).fill(0);
  let previous = 0;
  let result = 0;

  for (const num of nums) {
    points[num] += num;
  }

  for (const value of points) {
    const temp = result;
    result = Math.max(result, previous + value);
    previous = temp;
  }

  return result;
};
