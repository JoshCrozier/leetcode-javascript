/**
 * 3000. Maximum Area of Longest Diagonal Rectangle
 * https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/
 * Difficulty: Easy
 *
 * You are given a 2D 0-indexed integer array dimensions.
 *
 * For all indices i, 0 <= i < dimensions.length, dimensions[i][0] represents the length and
 * dimensions[i][1] represents the width of the rectangle i.
 *
 * Return the area of the rectangle having the longest diagonal. If there are multiple rectangles
 * with the longest diagonal, return the area of the rectangle having the maximum area.
 */

/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
  let maxDiagonal = 0;
  let result = 0;

  for (const [length, width] of dimensions) {
    const diagonal = length * length + width * width;
    const area = length * width;

    if (diagonal > maxDiagonal || (diagonal === maxDiagonal && area > result)) {
      maxDiagonal = diagonal;
      result = area;
    }
  }

  return result;
};
