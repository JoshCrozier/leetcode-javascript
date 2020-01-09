/**
 * 976. Largest Perimeter Triangle
 * https://leetcode.com/problems/largest-perimeter-triangle/
 * Difficulty: Easy
 *
 * Given an array A of positive lengths, return the largest
 * perimeter of a triangle with non-zero area, formed from 3
 * of these lengths.
 *
 * If it is impossible to form any triangle of non-zero
 * area, return 0.
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  A.sort((a, b) => a - b);

  for (let i = A.length - 1; i > 1; --i) {
    if (A[i] < A[i - 1] + A[i - 2]) {
      return A[i] + A[i - 1] + A[i - 2];
    }
  }

  return 0;
};
