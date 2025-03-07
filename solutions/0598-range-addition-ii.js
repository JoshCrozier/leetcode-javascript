/**
 * 598. Range Addition II
 * https://leetcode.com/problems/range-addition-ii/
 * Difficulty: Easy
 *
 * You are given an m x n matrix M initialized with all 0's and an array of operations ops,
 * where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai
 * and 0 <= y < bi.
 *
 * Count and return the number of maximum integers in the matrix after performing all the
 * operations.
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
  let a = m;
  let b = n;

  for (const op of ops) {
    a = Math.min(a, op[0]);
    b = Math.min(b, op[1]);
  }

  return a * b;
};
