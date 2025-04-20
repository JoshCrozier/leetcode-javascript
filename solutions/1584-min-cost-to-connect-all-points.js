/**
 * 1584. Min Cost to Connect All Points
 * https://leetcode.com/problems/min-cost-to-connect-all-points/
 * Difficulty: Medium
 *
 * You are given an array points representing integer coordinates of some points on a 2D-plane,
 * where points[i] = [xi, yi].
 *
 * The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between
 * them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.
 *
 * Return the minimum cost to make all points connected. All points are connected if there is
 * exactly one simple path between any two points.
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
  const n = points.length;
  const minCost = Array(n).fill(Infinity);
  const visited = new Set();
  let result = 0;

  minCost[0] = 0;

  for (let i = 0; i < n; i++) {
    let minIdx = -1;
    let minVal = Infinity;

    for (let j = 0; j < n; j++) {
      if (!visited.has(j) && minCost[j] < minVal) {
        minVal = minCost[j];
        minIdx = j;
      }
    }

    if (minIdx === -1) break;

    visited.add(minIdx);
    result += minVal;

    for (let j = 0; j < n; j++) {
      if (!visited.has(j)) {
        const cost = Math.abs(points[minIdx][0] - points[j][0])
          + Math.abs(points[minIdx][1] - points[j][1]);
        minCost[j] = Math.min(minCost[j], cost);
      }
    }
  }

  return result;
};
