/**
 * 447. Number of Boomerangs
 * https://leetcode.com/problems/number-of-boomerangs/
 * Difficulty: Medium
 *
 * You are given n points in the plane that are all distinct, where points[i] = [xi, yi].
 * A boomerang is a tuple of points (i, j, k) such that the distance between i and j equals
 * the distance between i and k (the order of the tuple matters).
 *
 * Return the number of boomerangs.
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  let count = 0;

  for (let i = 0; i < points.length; i++) {
    const distances = new Map();
    for (let j = 0; j < points.length; j++) {
      if (i === j) continue;
      const d = (points[i][0] - points[j][0]) ** 2 + (points[i][1] - points[j][1]) ** 2;
      distances.set(d, (distances.get(d) || 0) + 1);
    }
    for (const d of distances.values()) {
      if (d > 1) count += d * (d - 1);
    }
  }

  return count;
};
