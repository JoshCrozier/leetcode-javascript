/**
 * 1439. Find the Kth Smallest Sum of a Matrix With Sorted Rows
 * https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/
 * Difficulty: Hard
 *
 * You are given an m x n matrix mat that has its rows sorted in non-decreasing order and
 * an integer k.
 *
 * You are allowed to choose exactly one element from each row to form an array.
 *
 * Return the kth smallest array sum among all possible arrays.
 */

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(mat, k) {
  let sums = [0];
  const rows = mat.length;

  for (let row = 0; row < rows; row++) {
    const nextSums = [];
    for (const prevSum of sums) {
      for (const num of mat[row]) {
        nextSums.push(prevSum + num);
      }
    }
    sums = nextSums.sort((a, b) => a - b).slice(0, Math.min(k, nextSums.length));
  }

  return sums[k - 1];
};
