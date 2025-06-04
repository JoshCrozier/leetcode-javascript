/**
 * 2860. Happy Students
 * https://leetcode.com/problems/happy-students/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums of length n where n is the total number of
 * students in the class. The class teacher tries to select a group of students so that
 * all the students remain happy.
 *
 * The ith student will become happy if one of these two conditions is met:
 * - The student is selected and the total number of selected students is strictly greater
 *   than nums[i].
 * - The student is not selected and the total number of selected students is strictly less
 *   than nums[i].
 *
 * Return the number of ways to select a group of students so that everyone remains happy.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countWays = function(nums) {
  nums.sort((a, b) => a - b);
  let result = 0;
  let selected = 0;

  if (0 < nums[0]) result++;

  for (let i = 0; i < nums.length; i++) {
    selected++;
    if (selected > nums[i] && (i + 1 === nums.length || selected < nums[i + 1])) {
      result++;
    }
  }

  return result;
};
