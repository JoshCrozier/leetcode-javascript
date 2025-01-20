/**
 * 2661. First Completely Painted Row or Column
 * https://leetcode.com/problems/first-completely-painted-row-or-column/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array arr, and an m x n integer matrix mat. arr and mat
 * both contain all the integers in the range [1, m * n].
 *
 * Go through each index i in arr starting from index 0 and paint the cell in mat containing
 * the integer arr[i].
 *
 * Return the smallest index i at which either a row or a column will be completely painted
 * in mat.
 */

/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
  const rows = new Array(mat.length).fill(0);
  const columns = new Array(mat[0].length).fill(0);
  const map = new Map();

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      map.set(mat[i][j], [i, j]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const [rowIndex, columnIndex] = map.get(arr[i]);
    if (++rows[rowIndex] === mat[0].length || ++columns[columnIndex] === mat.length) {
      return i;
    }
  }
};
