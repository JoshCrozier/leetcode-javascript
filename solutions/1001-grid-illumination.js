/**
 * 1001. Grid Illumination
 * https://leetcode.com/problems/grid-illumination/
 * Difficulty: Hard
 *
 * There is a 2D grid of size n x n where each cell of this grid has a lamp that is initially
 * turned off.
 *
 * You are given a 2D array of lamp positions lamps, where lamps[i] = [rowi, coli] indicates that
 * the lamp at grid[rowi][coli] is turned on. Even if the same lamp is listed more than once, it
 * is turned on.
 *
 * When a lamp is turned on, it illuminates its cell and all other cells in the same row, column,
 * or diagonal.
 *
 * You are also given another 2D array queries, where queries[j] = [rowj, colj]. For the jth query,
 * determine whether grid[rowj][colj] is illuminated or not. After answering the jth query, turn off
 * the lamp at grid[rowj][colj] and its 8 adjacent lamps if they exist. A lamp is adjacent if its
 * cell shares either a side or corner with grid[rowj][colj].
 *
 * Return an array of integers ans, where ans[j] should be 1 if the cell in the jth query was
 * illuminated, or 0 if the lamp was not.
 */

/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function(n, lamps, queries) {
  const rowCount = new Map();
  const colCount = new Map();
  const diag1Count = new Map();
  const diag2Count = new Map();
  const lampSet = new Set();

  for (const [r, c] of lamps) {
    if (!lampSet.has(`${r},${c}`)) {
      lampSet.add(`${r},${c}`);
      rowCount.set(r, (rowCount.get(r) || 0) + 1);
      colCount.set(c, (colCount.get(c) || 0) + 1);
      diag1Count.set(r - c, (diag1Count.get(r - c) || 0) + 1);
      diag2Count.set(r + c, (diag2Count.get(r + c) || 0) + 1);
    }
  }

  const directions = [[0, 0], [0, 1], [0, -1], [1, 0], [1, 1], [1, -1], [-1, 0], [-1, 1], [-1, -1]];
  const result = new Array(queries.length);

  for (let i = 0; i < queries.length; i++) {
    const [r, c] = queries[i];
    result[i] = (rowCount.get(r) > 0 || colCount.get(c) > 0
      || diag1Count.get(r - c) > 0 || diag2Count.get(r + c) > 0) ? 1 : 0;

    for (const [dr, dc] of directions) {
      const newR = r + dr;
      const newC = c + dc;
      const key = `${newR},${newC}`;

      if (newR >= 0 && newR < n && newC >= 0 && newC < n && lampSet.has(key)) {
        lampSet.delete(key);
        rowCount.set(newR, rowCount.get(newR) - 1);
        colCount.set(newC, colCount.get(newC) - 1);
        diag1Count.set(newR - newC, diag1Count.get(newR - newC) - 1);
        diag2Count.set(newR + newC, diag2Count.get(newR + newC) - 1);
      }
    }
  }

  return result;
};
