/**
 * 2923. Find Champion I
 * https://leetcode.com/problems/find-champion-i/
 * Difficulty: Easy
 *
 * There are n teams numbered from 0 to n - 1 in a tournament.
 *
 * Given a 0-indexed 2D boolean matrix grid of size n * n. For all i, j that 0 <= i, j <= n - 1
 * and i != j team i is stronger than team j if grid[i][j] == 1, otherwise, team j is stronger
 * than team i.
 *
 * Team a will be the champion of the tournament if there is no team b that is stronger than
 * team a.
 *
 * Return the team that will be the champion of the tournament.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
  const n = grid.length;

  for (let i = 0; i < n; i++) {
    let isChampion = true;
    for (let j = 0; j < n; j++) {
      if (i !== j && grid[j][i] === 1) {
        isChampion = false;
        break;
      }
    }
    if (isChampion) return i;
  }

  return -1;
};
