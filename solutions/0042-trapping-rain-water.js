/**
 * 42. Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water/
 * Difficulty: Hard
 *
 * Given `n` non-negative integers representing an elevation map where the width
 * of each bar is `1`, compute how much water it can trap after raining.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const leftMax = [];
  const rightMax = [];
  let result = 0;

  leftMax[0] = height[0];
  rightMax[height.length - 1] = height[height.length - 1];

  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }

  for (let i = height.length - 2; i > -1; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }

  for (let i = 0; i < height.length; i++) {
    result += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return result;
};
