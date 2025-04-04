/**
 * 1131. Maximum of Absolute Value Expression
 * https://leetcode.com/problems/maximum-of-absolute-value-expression/
 * Difficulty: Medium
 *
 * Given two arrays of integers with equal lengths, return the maximum value of:
 * - |arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|
 *
 * where the maximum is taken over all 0 <= i, j < arr1.length.
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function(arr1, arr2) {
  const directions = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
  let result = 0;

  for (const [dx, dy] of directions) {
    let minSeen = Infinity;
    let maxSeen = -Infinity;

    for (let i = 0; i < arr1.length; i++) {
      const value = dx * arr1[i] + dy * arr2[i] + i;
      minSeen = Math.min(minSeen, value);
      maxSeen = Math.max(maxSeen, value);
    }

    result = Math.max(result, maxSeen - minSeen);
  }

  return result;
};
