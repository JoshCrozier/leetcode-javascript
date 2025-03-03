/**
 * 478. Generate Random Point in a Circle
 * https://leetcode.com/problems/generate-random-point-in-a-circle/
 * Difficulty: Medium
 *
 * Given the radius and the position of the center of a circle, implement the function randPoint
 * which generates a uniform random point inside the circle.
 *
 * Implement the Solution class:
 * - Solution(double radius, double x_center, double y_center) initializes the object with the
 *   radius of the circle radius and the position of the center (x_center, y_center).
 * - randPoint() returns a random point inside the circle. A point on the circumference of the
 *   circle is considered to be in the circle. The answer is returned as an array [x, y].
 */

/**
 * @param {number} radius
 * @param {number} x
 * @param {number} y
 */
var Solution = function(radius, x, y) {
  this.r = radius;
  this.x = x;
  this.y = y;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
  while (true) {
    const [x, y] = [Math.random() * 2 - 1, Math.random() * 2 - 1];
    if (x * x + y * y <= 1) {
      return [this.x + x * this.r, this.y + y * this.r];
    }
  }
};
