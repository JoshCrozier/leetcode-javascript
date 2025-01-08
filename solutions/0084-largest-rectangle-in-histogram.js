/**
 * 84. Largest Rectangle in Histogram
 * https://leetcode.com/problems/largest-rectangle-in-histogram/
 * Difficulty: Hard
 *
 * Given an array of integers heights representing the histogram's bar height where the
 * width of each bar is 1, return the area of the largest rectangle in the histogram.
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const entries = [...heights, 0];
  const stack = [];
  let area = 0;

  for (let i = 0; i < entries.length; i++) {
    let updatedHeight = i;

    while (stack.length && stack[stack.length - 1][1] > entries[i]) {
      const [x, y] = stack.pop();
      area = Math.max(area, (i - x) * y);
      updatedHeight = x;
    }

    stack.push([updatedHeight, entries[i]]);
  }

  return area;
};
