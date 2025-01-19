/**
 * 1368. Minimum Cost to Make at Least One Valid Path in a Grid
 * https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/
 * Difficulty: Hard
 *
 * Given an m x n grid. Each cell of the grid has a sign pointing to the next cell you should
 * visit if you are currently in this cell. The sign of grid[i][j] can be:
 * - 1 which means go to the cell to the right. (i.e go from grid[i][j] to grid[i][j + 1])
 * - 2 which means go to the cell to the left. (i.e go from grid[i][j] to grid[i][j - 1])
 * - 3 which means go to the lower cell. (i.e go from grid[i][j] to grid[i + 1][j])
 * - 4 which means go to the upper cell. (i.e go from grid[i][j] to grid[i - 1][j])
 *
 * Notice that there could be some signs on the cells of the grid that point outside the grid.
 *
 * You will initially start at the upper left cell (0, 0). A valid path in the grid is a path
 * that starts from the upper left cell (0, 0) and ends at the bottom-right cell (m - 1, n - 1)
 * following the signs on the grid. The valid path does not have to be the shortest.
 *
 * You can modify the sign on a cell with cost = 1. You can modify the sign on a cell one time
 * only.
 *
 * Return the minimum cost to make the grid have at least one valid path.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
  const queue = [[0, 0]];
  const directions = [[0, 1, 1], [0, -1, 2], [1, 0, 3], [-1, 0, 4]];
  const bfs = grid.map(r => r.map(_ => Infinity));
  bfs[0][0] = 0;

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (const [dx, dy, value] of directions) {
      const [cX, cY] = [x + dx, y + dy];
      if (grid[cX]?.[cY]) {
        const updatedValue = bfs[x][y] + (grid[x][y] !== value);
        if (updatedValue < bfs[cX][cY]) {
          bfs[cX][cY] = updatedValue;
          queue.push([cX, cY]);
        }
      }
    }
  }

  return bfs.at(-1).at(-1);
};
