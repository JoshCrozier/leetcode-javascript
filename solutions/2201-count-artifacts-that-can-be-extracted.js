/**
 * 2201. Count Artifacts That Can Be Extracted
 * https://leetcode.com/problems/count-artifacts-that-can-be-extracted/
 * Difficulty: Medium
 *
 * There is an n x n 0-indexed grid with some artifacts buried in it. You are given the integer
 * n and a 0-indexed 2D integer array artifacts describing the positions of the rectangular
 * artifacts where artifacts[i] = [r1i, c1i, r2i, c2i] denotes that the ith artifact is buried
 * in the subgrid where:
 * - (r1i, c1i) is the coordinate of the top-left cell of the ith artifact and
 * - (r2i, c2i) is the coordinate of the bottom-right cell of the ith artifact.
 *
 * You will excavate some cells of the grid and remove all the mud from them. If the cell has a
 * part of an artifact buried underneath, it will be uncovered. If all the parts of an artifact
 * are uncovered, you can extract it.
 *
 * Given a 0-indexed 2D integer array dig where dig[i] = [ri, ci] indicates that you will excavate
 * the cell (ri, ci), return the number of artifacts that you can extract.
 *
 * The test cases are generated such that:
 * - No two artifacts overlap.
 * - Each artifact only covers at most 4 cells.
 * - The entries of dig are unique.
 */

/**
 * @param {number} n
 * @param {number[][]} artifacts
 * @param {number[][]} dig
 * @return {number}
 */
var digArtifacts = function(n, artifacts, dig) {
  const excavated = new Set();
  let result = 0;

  for (const [row, col] of dig) {
    excavated.add(`${row},${col}`);
  }

  for (const [r1, c1, r2, c2] of artifacts) {
    let allUncovered = true;

    for (let r = r1; r <= r2; r++) {
      for (let c = c1; c <= c2; c++) {
        if (!excavated.has(`${r},${c}`)) {
          allUncovered = false;
          break;
        }
      }
      if (!allUncovered) break;
    }

    if (allUncovered) result++;
  }

  return result;
};
