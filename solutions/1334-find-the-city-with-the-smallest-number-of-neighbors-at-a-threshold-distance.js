/**
 * 1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance
 * https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/
 * Difficulty: Medium
 *
 * There are n cities numbered from 0 to n-1. Given the array edges where
 * edges[i] = [fromi, toi, weighti] represents a bidirectional and weighted edge between cities
 * fromi and toi, and given the integer distanceThreshold.
 *
 * Return the city with the smallest number of cities that are reachable through some path and whose
 * distance is at most distanceThreshold, If there are multiple such cities, return the city with
 * the greatest number.
 *
 * Notice that the distance of a path connecting cities i and j is equal to the sum of the edges'
 * weights along that path.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
  const distances = Array.from({ length: n }, () => Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) {
    distances[i][i] = 0;
  }

  for (const [from, to, weight] of edges) {
    distances[from][to] = weight;
    distances[to][from] = weight;
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        distances[i][j] = Math.min(distances[i][j], distances[i][k] + distances[k][j]);
      }
    }
  }

  let minNeighbors = n;
  let result = 0;

  for (let i = 0; i < n; i++) {
    const neighbors = distances[i].filter(dist => dist <= distanceThreshold).length - 1;
    if (neighbors <= minNeighbors) {
      minNeighbors = neighbors;
      result = i;
    }
  }

  return result;
};
