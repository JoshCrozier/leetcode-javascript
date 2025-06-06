/**
 * 2971. Find Polygon With the Largest Perimeter
 * https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/
 * Difficulty: Medium
 *
 * You are given an array of positive integers nums of length n.
 *
 * A polygon is a closed plane figure that has at least 3 sides. The longest side of a polygon is
 * smaller than the sum of its other sides.
 *
 * Conversely, if you have k (k >= 3) positive real numbers a1, a2, a3, ..., ak where
 * a1 <= a2 <= a3 <= ... <= ak and a1 + a2 + a3 + ... + ak-1 > ak, then there always exists
 * a polygon with k sides whose lengths are a1, a2, a3, ..., ak.
 *
 * The perimeter of a polygon is the sum of lengths of its sides.
 *
 * Return the largest possible perimeter of a polygon whose sides can be formed from nums, or -1
 * if it is not possible to create a polygon.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
  nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] < nums.slice(i + 1).reduce((sum, num) => sum + num, 0)) {
      return nums.slice(i).reduce((sum, num) => sum + num, 0);
    }
  }
  return -1;
};
