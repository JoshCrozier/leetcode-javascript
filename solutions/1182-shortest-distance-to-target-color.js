/**
 * 1182. Shortest Distance to Target Color
 * https://leetcode.com/problems/shortest-distance-to-target-color/
 * Difficulty: Medium
 *
 * You are given an array colors, in which there are three colors: 1, 2 and 3.
 *
 * You are also given some queries. Each query consists of two integers i and c,
 * return the shortest distance between the given index i and the target color c.
 * If there is no solution return -1.
 */

/**
 * @param {number[]} colors
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceColor = function(colors, queries) {
  const colorIndices = { 1: [], 2: [], 3: [] };

  for (let i = 0; i < colors.length; i++) {
    colorIndices[colors[i]].push(i);
  }

  return queries.map(([index, color]) =>
    findClosestDistance(index, colorIndices[color])
  );

  function findClosestDistance(targetIndex, colorArray) {
    if (colorArray.length === 0) return -1;

    let left = 0;
    let right = colorArray.length - 1;
    let closestDistance = Infinity;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const distance = Math.abs(colorArray[mid] - targetIndex);
      closestDistance = Math.min(closestDistance, distance);

      if (colorArray[mid] < targetIndex) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return closestDistance;
  }
};
