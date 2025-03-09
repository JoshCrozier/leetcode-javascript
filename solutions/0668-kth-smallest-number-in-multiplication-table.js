/**
 * 668. Kth Smallest Number in Multiplication Table
 * https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/
 * Difficulty: Hard
 *
 * Nearly everyone has used the Multiplication Table. The multiplication table of size m x n is
 * an integer matrix mat where mat[i][j] == i * j (1-indexed).
 *
 * Given three integers m, n, and k, return the kth smallest element in the m x n multiplication
 * table.
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
  let low = 1;
  let high = m * n;

  while (low < high) {
    const middle = Math.floor((low + high) / 2);
    if (helper(middle) < k) {
      low = middle + 1;
    } else {
      high = middle;
    }
  }

  return low;

  function helper(x) {
    let count = 0;
    for (let i = 1; i <= m; i++) {
      count += Math.min(Math.floor(x / i), n);
    }
    return count;
  }
};
