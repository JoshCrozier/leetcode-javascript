/**
 * 2647. Color the Triangle Red
 * https://leetcode.com/problems/color-the-triangle-red/
 * Difficulty: Hard
 *
 * You are given an integer n. Consider an equilateral triangle of side length n, broken up into n2
 * unit equilateral triangles. The triangle has n 1-indexed rows where the ith row has 2i - 1 unit
 * equilateral triangles.
 *
 * The triangles in the ith row are also 1-indexed with coordinates from (i, 1) to (i, 2i - 1).
 * The following image shows a triangle of side length 4 with the indexing of its triangle.
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var colorRed = function(n) {
  const result = [[1, 1]];
  const startCycle = [1, 2, 3, 1];
  const shortCycle = [0, 1];

  for (let i = n; i > 1; i--) {
    const start = startCycle[(n - i) % 4];
    const short = shortCycle[(n - i) % 2];

    for (let j = start; j < i * 2; j += 2) {
      result.push([i, j]);
      if (short) break;
    }
  }

  return result;
};
