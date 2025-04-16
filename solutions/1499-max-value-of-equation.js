/**
 * 1499. Max Value of Equation
 * https://leetcode.com/problems/max-value-of-equation/
 * Difficulty: Hard
 *
 * You are given an array points containing the coordinates of points on a 2D plane,
 * sorted by the x-values, where points[i] = [xi, yi] such that xi < xj for all
 * 1 <= i < j <= points.length. You are also given an integer k.
 *
 * Return the maximum value of the equation yi + yj + |xi - xj| where |xi - xj| <= k
 * and 1 <= i < j <= points.length.
 *
 * It is guaranteed that there exists at least one pair of points that satisfy the
 * constraint |xi - xj| <= k.
 */

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var findMaxValueOfEquation = function(points, k) {
  let result = -Infinity;
  const q = [];

  for (let j = 0; j < points.length; j++) {
    const [xj, yj] = points[j];

    while (q.length && xj - points[q[0]][0] > k) {
      q.shift();
    }

    if (q.length) {
      const [xi, yi] = points[q[0]];
      result = Math.max(result, yi + yj + xj - xi);
    }

    while (q.length && yj - xj >= points[q[q.length - 1]][1] - points[q[q.length - 1]][0]) {
      q.pop();
    }

    q.push(j);
  }

  return result;
};
