/**
 * 2865. Beautiful Towers I
 * https://leetcode.com/problems/beautiful-towers-i/
 * Difficulty: Medium
 *
 * You are given an array heights of n integers representing the number of bricks in n
 * consecutive towers. Your task is to remove some bricks to form a mountain-shaped tower
 * arrangement. In this arrangement, the tower heights are non-decreasing, reaching a
 * maximum peak value with one or multiple consecutive towers and then non-increasing.
 *
 * Return the maximum possible sum of heights of a mountain-shaped tower arrangement.
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var maximumSumOfHeights = function(heights) {
  const n = heights.length;
  let result = 0;

  for (let peak = 0; peak < n; peak++) {
    let currentSum = heights[peak];
    let prevHeight = heights[peak];

    for (let i = peak - 1; i >= 0; i--) {
      const currentHeight = Math.min(heights[i], prevHeight);
      currentSum += currentHeight;
      prevHeight = currentHeight;
    }

    prevHeight = heights[peak];

    for (let i = peak + 1; i < n; i++) {
      const currentHeight = Math.min(heights[i], prevHeight);
      currentSum += currentHeight;
      prevHeight = currentHeight;
    }

    result = Math.max(result, currentSum);
  }

  return result;
};
