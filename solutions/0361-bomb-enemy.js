/**
 * 361. Bomb Enemy
 * https://leetcode.com/problems/bomb-enemy/
 * Difficulty: Medium
 *
 * Given an m x n matrix grid where each cell is either a wall 'W', an enemy 'E' or empty '0',
 * return the maximum enemies you can kill using one bomb. You can only place the bomb in an
 * empty cell.
 *
 * The bomb kills all the enemies in the same row and column from the planted point until it
 * hits the wall since it is too strong to be destroyed.
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const colHits = new Array(cols).fill(0);
  let rowHits = 0;
  let result = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (j === 0 || grid[i][j-1] === 'W') {
        rowHits = 0;
        for (let k = j; k < cols && grid[i][k] !== 'W'; k++) {
          if (grid[i][k] === 'E') rowHits++;
        }
      }
      if (i === 0 || grid[i-1][j] === 'W') {
        colHits[j] = 0;
        for (let k = i; k < rows && grid[k][j] !== 'W'; k++) {
          if (grid[k][j] === 'E') colHits[j]++;
        }
      }
      if (grid[i][j] === '0') {
        result = Math.max(result, rowHits + colHits[j]);
      }
    }
  }

  return result;
};
