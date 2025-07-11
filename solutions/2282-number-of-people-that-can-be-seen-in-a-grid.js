/**
 * 2282. Number of People That Can Be Seen in a Grid
 * https://leetcode.com/problems/number-of-people-that-can-be-seen-in-a-grid/
 * Difficulty: Medium
 *
 * You are given an m x n 0-indexed 2D array of positive integers heights where heights[i][j]
 * is the height of the person standing at position (i, j).
 *
 * A person standing at position (row1, col1) can see a person standing at position (row2, col2) if:
 * - The person at (row2, col2) is to the right or below the person at (row1, col1). More formally,
 *   this means that either row1 == row2 and col1 < col2 or row1 < row2 and col1 == col2.
 * - Everyone in between them is shorter than both of them.
 *
 * Return an m x n 2D array of integers answer where answer[i][j] is the number of people that the
 * person at position (i, j) can see.
 */

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var seePeople = function(heights) {
  const rows = heights.length;
  const cols = heights[0].length;
  const result = new Array(rows).fill().map(() => new Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    const stack = [];
    for (let j = cols - 1; j >= 0; j--) {
      let equal = false;
      while (stack.length > 0 && stack[stack.length - 1] <= heights[i][j]) {
        if (stack[stack.length - 1] === heights[i][j]) {
          equal = true;
        }
        stack.pop();
        result[i][j]++;
      }
      if (stack.length > 0 && !equal) {
        result[i][j]++;
      }
      stack.push(heights[i][j]);
    }
  }

  for (let j = 0; j < cols; j++) {
    const stack = [];
    for (let i = rows - 1; i >= 0; i--) {
      let equal = false;
      while (stack.length > 0 && stack[stack.length - 1] <= heights[i][j]) {
        if (stack[stack.length - 1] === heights[i][j]) {
          equal = true;
        }
        stack.pop();
        result[i][j]++;
      }
      if (stack.length > 0 && !equal) {
        result[i][j]++;
      }
      stack.push(heights[i][j]);
    }
  }

  return result;
};
