/**
 * 699. Falling Squares
 * https://leetcode.com/problems/falling-squares/
 * Difficulty: Hard
 *
 * There are several squares being dropped onto the X-axis of a 2D plane.
 *
 * You are given a 2D integer array positions where positions[i] = [lefti, sideLengthi]
 * represents the ith square with a side length of sideLengthi that is dropped with its
 * left edge aligned with X-coordinate lefti.
 *
 * Each square is dropped one at a time from a height above any landed squares. It then
 * falls downward (negative Y direction) until it either lands on the top side of another
 * square or on the X-axis. A square brushing the left/right side of another square does
 * not count as landing on it. Once it lands, it freezes in place and cannot be moved.
 *
 * After each square is dropped, you must record the height of the current tallest stack
 * of squares.
 *
 * Return an integer array ans where ans[i] represents the height described above after
 * dropping the ith square.
 */

/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function(positions) {
  const map = new Map();
  const result = [];
  let max = 0;

  for (const [left, side] of positions) {
    const right = left + side;
    let height = 0;

    for (const [start, [i, n]] of map) {
      const end = start + i;
      if (right > start && left < end) {
        height = Math.max(height, n);
      }
    }

    height += side;
    map.set(left, [side, height]);
    max = Math.max(max, height);
    result.push(max);
  }

  return result;
};
