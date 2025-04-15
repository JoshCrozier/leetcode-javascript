/**
 * 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
 * https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/
 * Difficulty: Medium
 *
 * You are given a rectangular cake of size h x w and two arrays of integers horizontalCuts and
 * verticalCuts where:
 * - horizontalCuts[i] is the distance from the top of the rectangular cake to the ith horizontal
 *   cut and similarly, and
 * - verticalCuts[j] is the distance from the left of the rectangular cake to the jth vertical cut.
 *
 * Return the maximum area of a piece of cake after you cut at each horizontal and vertical position
 * provided in the arrays horizontalCuts and verticalCuts. Since the answer can be a large number,
 * return this modulo 109 + 7.
 */

/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);

  let maxHeight = Math.max(horizontalCuts[0], h - horizontalCuts[horizontalCuts.length - 1]);
  let maxWidth = Math.max(verticalCuts[0], w - verticalCuts[verticalCuts.length - 1]);

  for (let i = 1; i < horizontalCuts.length; i++) {
    maxHeight = Math.max(maxHeight, horizontalCuts[i] - horizontalCuts[i - 1]);
  }
  for (let i = 1; i < verticalCuts.length; i++) {
    maxWidth = Math.max(maxWidth, verticalCuts[i] - verticalCuts[i - 1]);
  }

  return Number((BigInt(maxHeight) * BigInt(maxWidth)) % BigInt(1000000007));
};
