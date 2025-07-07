/**
 * 2123. Minimum Operations to Remove Adjacent Ones in Matrix
 * https://leetcode.com/problems/minimum-operations-to-remove-adjacent-ones-in-matrix/
 * Difficulty: Hard
 *
 * You are given a 0-indexed binary matrix grid. In one operation, you can flip any 1 in
 * grid to be 0.
 *
 * A binary matrix is well-isolated if there is no 1 in the matrix that is 4-directionally
 * connected (i.e., horizontal and vertical) to another 1.
 *
 * Return the minimum number of operations to make grid well-isolated.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const match = Array.from({ length: m }, () => new Array(n).fill(-1));
  const visited = Array.from({ length: m }, () => new Array(n).fill(-1));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] && match[i][j] === -1) {
        visited[i][j] = i * n + j;
        count += dfs(i, j, visited[i][j]);
      }
    }
  }

  return count;

  function dfs(i, j, v) {
    for (const [di, dj] of directions) {
      const x = i + di;
      const y = j + dj;
      if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] && visited[x][y] !== v) {
        visited[x][y] = v;
        if (match[x][y] === -1 || dfs(Math.floor(match[x][y] / n), match[x][y] % n, v)) {
          match[x][y] = i * n + j;
          match[i][j] = x * n + y;
          return 1;
        }
      }
    }
    return 0;
  }
};
