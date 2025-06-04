/**
 * 2855. Minimum Right Shifts to Sort the Array
 * https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/
 * Difficulty: Easy
 *
 * You are given a 0-indexed array nums of length n containing distinct positive integers.
 * Return the minimum number of right shifts required to sort nums and -1 if this is not
 * possible.
 *
 * A right shift is defined as shifting the element at index i to index (i + 1) % n, for
 * all indices.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function(nums) {
  const n = nums.length;
  let breakPoint = 0;

  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) {
      breakPoint++;
      if (breakPoint > 1) return -1;
    }
  }

  if (breakPoint === 0) return 0;
  if (nums[n - 1] > nums[0]) return -1;

  return n - (nums.indexOf(Math.min(...nums)));
};
