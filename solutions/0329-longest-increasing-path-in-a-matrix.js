/**
 * 329. Longest Increasing Path in a Matrix
 * https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
 * Difficulty: Hard
 *
 * Given an m x n integers matrix, return the length of the longest increasing path in matrix.
 *
 * From each cell, you can either move in four directions: left, right, up, or down. You may
 * not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).
 */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  if (!matrix.length) return 0;
  const m = matrix.length;
  const n = matrix[0].length;
  const cache = new Array(m).fill().map(() => new Array(n));
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  return Math.max(...new Array(m).fill().map((_, i) =>
    new Array(n).fill().map((_, j) => dfs(i, j))).flat());

  function dfs(i, j) {
    return cache[i][j] || (cache[i][j] = 1 + Math.max(...directions.map(([di, dj]) => {
      const [a, b] = [i + di, j + dj];
      return a >= 0 && a < m && b >= 0 && b < n && matrix[a][b] > matrix[i][j]
        ? dfs(a, b) : 0;
    })));
  }
};
