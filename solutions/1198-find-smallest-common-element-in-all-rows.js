/**
 * 1198. Find Smallest Common Element in All Rows
 * https://leetcode.com/problems/find-smallest-common-element-in-all-rows/
 * Difficulty: Medium
 *
 * Given an m x n matrix mat where every row is sorted in strictly increasing order,
 * return the smallest common element in all rows.
 *
 * If there is no common element, return -1.
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function(mat) {
  const map = new Map();
  const rows = mat.length;

  for (let i = 0; i < rows; i++) {
    for (const element of mat[i]) {
      map.set(element, (map.get(element) || 0) + 1);

      if (map.get(element) === rows) {
        return element;
      }
    }
  }

  return -1;
};
