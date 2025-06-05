/**
 * 2946. Matrix Similarity After Cyclic Shifts
 * https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/
 * Difficulty: Easy
 *
 * You are given an m x n integer matrix mat and an integer k. The matrix rows are 0-indexed.
 *
 * The following proccess happens k times:
 * - Even-indexed rows (0, 2, 4, ...) are cyclically shifted to the left.
 * - Odd-indexed rows (1, 3, 5, ...) are cyclically shifted to the right.
 *
 * Return true if the final modified matrix after k steps is identical to the original matrix,
 * and false otherwise.
 */

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function(mat, k) {
  const m = mat.length;
  const n = mat[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const shift = i % 2 === 0 ? (j - k % n + n) % n : (j + k % n) % n;
      if (mat[i][j] !== mat[i][shift]) {
        return false;
      }
    }
  }

  return true;
};
