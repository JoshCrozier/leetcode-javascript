/**
 * 2492. Minimum Score of a Path Between Two Cities
 * https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/
 * Difficulty: Medium
 *
 * You are given a positive integer n representing n cities numbered from 1 to n. You are also
 * given a 2D array roads where roads[i] = [ai, bi, distancei] indicates that there is a
 * bidirectional road between cities ai and bi with a distance equal to distancei. The cities
 * graph is not necessarily connected.
 *
 * The score of a path between two cities is defined as the minimum distance of a road in this
 * path.
 *
 * Return the minimum possible score of a path between cities 1 and n.
 *
 * Note:
 * - A path is a sequence of roads between two cities.
 * - It is allowed for a path to contain the same road multiple times, and you can visit cities 1
 *   and n multiple times along the path.
 * - The test cases are generated such that there is at least one path between 1 and n.
 */

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b, dist] of roads) {
    graph[a].push([b, dist]);
    graph[b].push([a, dist]);
  }

  const visited = new Set();
  const queue = [1];
  let result = Infinity;

  while (queue.length) {
    const city = queue.shift();
    if (visited.has(city)) continue;
    visited.add(city);

    for (const [nextCity, dist] of graph[city]) {
      result = Math.min(result, dist);
      if (!visited.has(nextCity)) {
        queue.push(nextCity);
      }
    }
  }

  return result;
};
