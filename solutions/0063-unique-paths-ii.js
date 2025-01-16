/**
 * 63. Unique Paths II
 * https://leetcode.com/problems/unique-paths-ii/
 * Difficulty: Medium
 *
 * You are given an m x n integer array grid. There is a robot initially located at
 * the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right
 * corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at
 * any point in time.
 *
 * An obstacle and space are marked as 1 or 0 respectively in grid. A path that the
 * robot takes cannot include any square that is an obstacle.
 *
 * Return the number of possible unique paths that the robot can take to reach the
 * bottom-right corner.
 *
 * The testcases are generated so that the answer will be less than or equal to 2 * 109.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsWithObstacles = function(grid) {
  const cache = new Array(grid.length).fill(0).map(v => new Array(grid[0].length).fill(0));

  function traverse(x, y) {
    if (grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === 1) return 0;
    if (x === grid.length - 1 && y === grid[0].length - 1) return 1;
    if (!cache[x][y]) {
      cache[x][y] = traverse(x + 1, y) + traverse(x, y + 1);
    }
    return cache[x][y];
  }

  return traverse(0, 0);
};
