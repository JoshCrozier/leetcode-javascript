/**
 * 1091. Shortest Path in Binary Matrix
 * https://leetcode.com/problems/shortest-path-in-binary-matrix/
 * Difficulty: Medium
 *
 * Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix.
 * If there is no clear path, return -1.
 *
 * A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the
 * bottom-right cell (i.e., (n - 1, n - 1)) such that:
 * - All the visited cells of the path are 0.
 * - All the adjacent cells of the path are 8-directionally connected (i.e., they are different
 *   and they share an edge or a corner).
 *
 * The length of a clear path is the number of visited cells of this path.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
  const size = grid.length;
  if (grid[0][0] === 1 || grid[size - 1][size - 1] === 1) return -1;

  const queue = [[0, 0, 1]];
  const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  grid[0][0] = 1;

  while (queue.length) {
    const [row, col, distance] = queue.shift();
    if (row === size - 1 && col === size - 1) return distance;

    for (const [deltaRow, deltaCol] of directions) {
      const newRow = row + deltaRow;
      const newCol = col + deltaCol;

      if (newRow >= 0 && newRow < size && newCol >= 0
          && newCol < size && grid[newRow][newCol] === 0) {
        queue.push([newRow, newCol, distance + 1]);
        grid[newRow][newCol] = 1;
      }
    }
  }

  return -1;
};
