/**
 * 2850. Minimum Moves to Spread Stones Over Grid
 * https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/
 * Difficulty: Medium
 *
 * You are given a 0-indexed 2D integer matrix grid of size 3 * 3, representing the number of
 * stones in each cell. The grid contains exactly 9 stones, and there can be multiple stones
 * in a single cell.
 *
 * In one move, you can move a single stone from its current cell to any other cell if the two
 * cells share a side.
 *
 * Return the minimum number of moves required to place one stone in each cell.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function(grid) {
  const sources = [];
  const targets = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i][j] > 1) {
        for (let k = 1; k < grid[i][j]; k++) {
          sources.push([i, j]);
        }
      } else if (grid[i][j] === 0) {
        targets.push([i, j]);
      }
    }
  }

  let minMoves = Infinity;

  permute(0, 0);
  return minMoves;

  function permute(index, moves) {
    if (index === sources.length) {
      minMoves = Math.min(minMoves, moves);
      return;
    }

    for (let i = 0; i < targets.length; i++) {
      if (targets[i]) {
        const [si, sj] = sources[index];
        const [ti, tj] = targets[i];
        const dist = Math.abs(si - ti) + Math.abs(sj - tj);
        const temp = targets[i];
        targets[i] = null;
        permute(index + 1, moves + dist);
        targets[i] = temp;
      }
    }
  }
};
