/**
 * 1284. Minimum Number of Flips to Convert Binary Matrix to Zero Matrix
 * https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/
 * Difficulty: Hard
 *
 * Given a m x n binary matrix mat. In one step, you can choose one cell and flip it and all the
 * four neighbors of it if they exist (Flip is changing 1 to 0 and 0 to 1). A pair of cells are
 * called neighbors if they share one edge.
 *
 * Return the minimum number of steps required to convert mat to a zero matrix or -1 if you cannot.
 *
 * A binary matrix is a matrix with all cells equal to 0 or 1 only.
 *
 * A zero matrix is a matrix with all cells equal to 0.
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */
var minFlips = function(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const target = 0;
  const start = mat.flat().reduce((acc, val, idx) => acc | (val << idx), 0);
  const queue = [[start, 0]];
  const seen = new Set([start]);
  const directions = [[0, 0], [0, 1], [0, -1], [1, 0], [-1, 0]];

  while (queue.length) {
    const [state, steps] = queue.shift();

    if (state === target) return steps;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let nextState = state;
        for (const [di, dj] of directions) {
          const ni = i + di;
          const nj = j + dj;
          if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
            const pos = ni * cols + nj;
            nextState ^= (1 << pos);
          }
        }
        if (!seen.has(nextState)) {
          seen.add(nextState);
          queue.push([nextState, steps + 1]);
        }
      }
    }
  }

  return -1;
};
