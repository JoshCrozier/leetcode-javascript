/**
 * 1725. Number Of Rectangles That Can Form The Largest Square
 * https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/
 * Difficulty: Easy
 *
 * You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle
 * of length li and width wi.
 *
 * You can cut the ith rectangle to form a square with a side length of k if both k <= li and
 * k <= wi. For example, if you have a rectangle [4,6], you can cut it to get a square with a
 * side length of at most 4.
 *
 * Let maxLen be the side length of the largest square you can obtain from any of the given
 * rectangles.
 *
 * Return the number of rectangles that can make a square with a side length of maxLen.
 */

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
  let maxSide = 0;
  let result = 0;

  for (const [length, width] of rectangles) {
    const side = Math.min(length, width);
    if (side > maxSide) {
      maxSide = side;
      result = 1;
    } else if (side === maxSide) {
      result++;
    }
  }

  return result;
};
