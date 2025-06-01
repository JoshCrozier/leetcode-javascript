/**
 * 2732. Find a Good Subset of the Matrix
 * https://leetcode.com/problems/find-a-good-subset-of-the-matrix/
 * Difficulty: Hard
 *
 * You are given a 0-indexed m x n binary matrix grid.
 *
 * Let us call a non-empty subset of rows good if the sum of each column of the subset is at
 * most half of the length of the subset.
 *
 * More formally, if the length of the chosen subset of rows is k, then the sum of each column
 * should be at most floor(k / 2).
 *
 * Return an integer array that contains row indices of a good subset sorted in ascending order.
 *
 * If there are multiple good subsets, you can return any of them. If there are no good subsets,
 * return an empty array.
 *
 * A subset of rows of the matrix grid is any matrix that can be obtained by deleting some (possibly
 * none or all) rows from grid.
 */

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var goodSubsetofBinaryMatrix = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const rowMasks = new Map();

  for (let i = 0; i < rows; i++) {
    let mask = 0;
    for (let j = 0; j < cols; j++) {
      mask |= grid[i][j] << j;
    }
    if (mask === 0) return [i];
    rowMasks.set(mask, i);
  }

  for (const [mask1, i] of rowMasks) {
    for (const [mask2, j] of rowMasks) {
      if ((mask1 & mask2) === 0) return [Math.min(i, j), Math.max(i, j)];
    }
  }

  return [];
};
