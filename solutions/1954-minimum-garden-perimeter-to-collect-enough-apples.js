/**
 * 1954. Minimum Garden Perimeter to Collect Enough Apples
 * https://leetcode.com/problems/minimum-garden-perimeter-to-collect-enough-apples/
 * Difficulty: Medium
 *
 * In a garden represented as an infinite 2D grid, there is an apple tree planted at every
 * integer coordinate. The apple tree planted at an integer coordinate (i, j) has |i| + |j|
 * apples growing on it.
 *
 * You will buy an axis-aligned square plot of land that is centered at (0, 0).
 *
 * Given an integer neededApples, return the minimum perimeter of a plot such that at least
 * neededApples apples are inside or on the perimeter of that plot.
 *
 * The value of |x| is defined as:
 * - x if x >= 0
 * - -x if x < 0
 */

/**
 * @param {number} neededApples
 * @return {number}
 */
var minimumPerimeter = function(neededApples) {
  let n = 0;
  let totalApples = 0;

  while (totalApples < neededApples) {
    n++;
    totalApples = 2 * n * (n + 1) * (2 * n + 1);
  }

  return 8 * n;
};
