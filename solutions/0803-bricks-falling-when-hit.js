/**
 * 803. Bricks Falling When Hit
 * https://leetcode.com/problems/bricks-falling-when-hit/
 * Difficulty: Hard
 *
 * You are given an m x n binary grid, where each 1 represents a brick and 0 represents an empty
 * space. A brick is stable if:
 * - It is directly connected to the top of the grid, or
 * - At least one other brick in its four adjacent cells is stable.
 *
 * You are also given an array hits, which is a sequence of erasures we want to apply. Each time
 * we want to erase the brick at the location hits[i] = (rowi, coli). The brick on that location
 * (if it exists) will disappear. Some other bricks may no longer be stable because of that erasure
 * and will fall. Once a brick falls, it is immediately erased from the grid (i.e., it does not
 * land on other stable bricks).
 *
 * Return an array result, where each result[i] is the number of bricks that will fall after the
 * ith erasure is applied.
 *
 * Note that an erasure may refer to a location with no brick, and if it does, no bricks drop.
 */

/**
 * @param {number[][]} grid
 * @param {number[][]} hits
 * @return {number[]}
 */
var hitBricks = function(grid, hits) {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const fallenBricks = new Array(hits.length).fill(0);

  hits.forEach(([x, y]) => {
    if (grid[x][y] === 1) grid[x][y] = 2;
  });

  for (let col = 0; col < cols; col++) markStableBricks(0, col, grid);

  for (let i = hits.length - 1; i >= 0; i--) {
    const [x, y] = hits[i];
    if (grid[x][y] !== 2) continue;

    grid[x][y] = 1;
    if (hasStableNeighbor(x, y, grid)) {
      fallenBricks[i] = markStableBricks(x, y, grid) - 1;
    }
  }

  return fallenBricks;

  function markStableBricks(x, y, grid) {
    if (x < 0 || x >= rows || y < 0 || y >= cols || grid[x][y] !== 1) return 0;

    grid[x][y] = 3;
    return 1 + directions.reduce((count, [dx, dy]) => {
      return count + markStableBricks(x + dx, y + dy, grid);
    }, 0);
  }

  function hasStableNeighbor(x, y, grid) {
    if (x === 0) return true;

    return directions.some(([dx, dy]) => {
      const newX = x + dx;
      const newY = y + dy;
      return newX >= 0 && newX < rows && newY >= 0 && newY < cols && grid[newX][newY] === 3;
    });
  }
};
