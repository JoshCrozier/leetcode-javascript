/**
 * 2001. Number of Pairs of Interchangeable Rectangles
 * https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/
 * Difficulty: Medium
 *
 * You are given n rectangles represented by a 0-indexed 2D integer array rectangles,
 * where rectangles[i] = [widthi, heighti] denotes the width and height of the ith rectangle.
 *
 * Two rectangles i and j (i < j) are considered interchangeable if they have the same
 * width-to-height ratio. More formally, two rectangles are interchangeable if
 * widthi/heighti == widthj/heightj (using decimal division, not integer division).
 *
 * Return the number of pairs of interchangeable rectangles in rectangles.
 */

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function(rectangles) {
  const map = new Map();
  let result = 0;

  for (const [width, height] of rectangles) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const divisor = gcd(width, height);
    const ratio = `${width / divisor}/${height / divisor}`;

    if (map.has(ratio)) {
      result += map.get(ratio);
      map.set(ratio, map.get(ratio) + 1);
    } else {
      map.set(ratio, 1);
    }
  }

  return result;
};
