/**
 * 3464. Maximize the Distance Between Points on a Square
 * https://leetcode.com/problems/maximize-the-distance-between-points-on-a-square/
 * Difficulty: Hard
 *
 * You are given an integer side, representing the edge length of a square with corners
 * at (0, 0), (0, side), (side, 0), and (side, side) on a Cartesian plane.
 *
 * You are also given a positive integer k and a 2D integer array points, where
 * points[i] = [xi, yi] represents the coordinate of a point lying on the boundary of
 * the square.
 *
 * You need to select k elements among points such that the minimum Manhattan distance
 * between any two points is maximized.
 *
 * Return the maximum possible minimum Manhattan distance between the selected k points.
 *
 * The Manhattan Distance between two cells (xi, yi) and (xj, yj) is |xi - xj| + |yi - yj|.
 */

/**
 * @param {number} squareSide
 * @param {number[][]} coordinates
 * @param {number} pointsToPlace
 * @return {number}
 */
var maxDistance = function(squareSide, coordinates, pointsToPlace) {
  const pointCount = coordinates.length;
  const positions = new Array(pointCount);

  for (let i = 0; i < pointCount; i++) {
    const [x, y] = coordinates[i];
    positions[i] = y === 0 ? x : x === squareSide
      ? squareSide + y
      : y === squareSide
        ? 2 * squareSide + (squareSide - x)
        : 3 * squareSide + (squareSide - y);
  }
  positions.sort((a, b) => a - b);

  const perimeter = 4 * squareSide;
  const extendedPositions = new Array(pointCount * 2);
  for (let i = 0; i < pointCount; i++) {
    extendedPositions[i] = positions[i];
    extendedPositions[i + pointCount] = positions[i] + perimeter;
  }

  let result = 0;
  let maxDistance = 2 * squareSide;
  while (result < maxDistance) {
    const midDistance = Math.floor((result + maxDistance + 1) / 2);
    if (canPlaceAtDistance(midDistance)) result = midDistance;
    else maxDistance = midDistance - 1;
  }
  return result;

  function canPlaceAtDistance(distance) {
    for (let start = 0; start < pointCount; start++) {
      let current = start;
      let lastPos = extendedPositions[start];
      const limit = start + pointCount;
      let valid = true;

      for (let placed = 1; placed < pointsToPlace; placed++) {
        const nextTarget = lastPos + distance;
        let left = current + 1;
        let right = limit;

        while (left < right) {
          const mid = Math.floor((left + right) / 2);
          if (extendedPositions[mid] < nextTarget) left = mid + 1;
          else right = mid;
        }

        if (left === limit) {
          valid = false;
          break;
        }
        current = left;
        lastPos = extendedPositions[current];
      }

      if (valid && extendedPositions[start] + perimeter - lastPos >= distance) {
        return true;
      }
    }
    return false;
  }
};
