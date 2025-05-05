/**
 * 2013. Detect Squares
 * https://leetcode.com/problems/detect-squares/
 * Difficulty: Medium
 *
 * You are given a stream of points on the X-Y plane. Design an algorithm that:
 * - Adds new points from the stream into a data structure. Duplicate points are allowed and should
 *   be treated as different points.
 * - Given a query point, counts the number of ways to choose three points from the data structure
 *   such that the three points and the query point form an axis-aligned square with positive area.
 *
 * An axis-aligned square is a square whose edges are all the same length and are either parallel
 * or perpendicular to the x-axis and y-axis.
 *
 * Implement the DetectSquares class:
 * - DetectSquares() Initializes the object with an empty data structure.
 * - void add(int[] point) Adds a new point point = [x, y] to the data structure.
 * - int count(int[] point) Counts the number of ways to form axis-aligned squares with point
 *   point = [x, y] as described above.
 */

var DetectSquares = function() {
  this.points = new Map();
};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function(point) {
  const [x, y] = point;
  const key = `${x},${y}`;
  this.points.set(key, (this.points.get(key) || 0) + 1);
};

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function(point) {
  const [x, y] = point;
  let result = 0;

  for (const [key, count] of this.points) {
    const [px, py] = key.split(',').map(Number);
    if (px === x || py === y || Math.abs(px - x) !== Math.abs(py - y)) continue;

    const point1 = `${x},${py}`;
    const point2 = `${px},${y}`;
    result += count * (this.points.get(point1) || 0) * (this.points.get(point2) || 0);
  }

  return result;
};
