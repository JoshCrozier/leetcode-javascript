/**
 * 11. Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 * Difficulty: Medium
 *
 * Given n non-negative integers `a1, a2, ..., an ,` where each represents a point at
 * coordinate `(i, ai)`. `n` vertical lines are drawn such that the two endpoints of
 * the line `i` is at `(i, ai)` and `(i, 0)`. Find two lines, which, together with the
 * x-axis forms a container, such that the container contains the most water.
 *
 * Notice that you may not slant the container.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxArea = 0;

  for (let left = 0, right = height.length - 1; left < right;) {
    maxArea = Math.max(
      maxArea,
      Math.min(height[left], height[right]) * (right - left)
    );

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};
