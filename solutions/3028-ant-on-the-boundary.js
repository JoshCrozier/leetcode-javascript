/**
 * 3028. Ant on the Boundary
 * https://leetcode.com/problems/ant-on-the-boundary/
 * Difficulty: Easy
 *
 * An ant is on a boundary. It sometimes goes left and sometimes right.
 *
 * You are given an array of non-zero integers nums. The ant starts reading nums from the
 * first element of it to its end. At each step, it moves according to the value of the
 * current element:
 * - If nums[i] < 0, it moves left by -nums[i] units.
 * - If nums[i] > 0, it moves right by nums[i] units.
 *
 * Return the number of times the ant returns to the boundary.
 *
 * Notes:
 * - There is an infinite space on both sides of the boundary.
 * - We check whether the ant is on the boundary only after it has moved |nums[i]| units.
 *   In other words, if the ant crosses the boundary during its movement, it does not count.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
  let position = 0;
  let result = 0;

  for (const step of nums) {
    position += step;
    if (position === 0) {
      result++;
    }
  }

  return result;
};
