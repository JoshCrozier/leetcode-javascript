/**
 * 1620. Coordinate With Maximum Network Quality
 * https://leetcode.com/problems/coordinate-with-maximum-network-quality/
 * Difficulty: Medium
 *
 * You are given an array of network towers towers, where towers[i] = [xi, yi, qi] denotes the
 * ith network tower with location (xi, yi) and quality factor qi. All the coordinates are
 * integral coordinates on the X-Y plane, and the distance between the two coordinates is the
 * Euclidean distance.
 *
 * You are also given an integer radius where a tower is reachable if the distance is less than
 * or equal to radius. Outside that distance, the signal becomes garbled, and the tower is not
 * reachable.
 *
 * The signal quality of the ith tower at a coordinate (x, y) is calculated with the formula
 * ⌊qi / (1 + d)⌋, where d is the distance between the tower and the coordinate. The network
 * quality at a coordinate is the sum of the signal qualities from all the reachable towers.
 *
 * Return the array [cx, cy] representing the integral coordinate (cx, cy) where the network
 * quality is maximum. If there are multiple coordinates with the same network quality, return
 * the lexicographically minimum non-negative coordinate.
 *
 * Note:
 * - A coordinate (x1, y1) is lexicographically smaller than (x2, y2) if either:
 *   - x1 < x2, or
 *   - x1 == x2 and y1 < y2.
 * - ⌊val⌋ is the greatest integer less than or equal to val (the floor function).
 */

/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function(towers, radius) {
  let maxQuality = 0;
  let optimalCoord = [0, 0];

  for (let x = 0; x <= 50; x++) {
    for (let y = 0; y <= 50; y++) {
      let currentQuality = 0;

      for (const [towerX, towerY, quality] of towers) {
        const distance = calculateDistance(x, y, towerX, towerY);
        if (distance <= radius) {
          currentQuality += Math.floor(quality / (1 + distance));
        }
      }

      if (currentQuality > maxQuality) {
        maxQuality = currentQuality;
        optimalCoord = [x, y];
      } else if (currentQuality === maxQuality && currentQuality > 0) {
        if (x < optimalCoord[0] || (x === optimalCoord[0] && y < optimalCoord[1])) {
          optimalCoord = [x, y];
        }
      }
    }
  }

  return optimalCoord;

  function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }
};
