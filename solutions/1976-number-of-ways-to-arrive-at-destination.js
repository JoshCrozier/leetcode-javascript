/**
 * 1976. Number of Ways to Arrive at Destination
 * https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/
 * Difficulty: Medium
 *
 * You are in a city that consists of n intersections numbered from 0 to n - 1 with bi-directional
 * roads between some intersections. The inputs are generated such that you can reach any
 * intersection from any other intersection and that there is at most one road between any two
 * intersections.
 *
 * You are given an integer n and a 2D integer array roads where roads[i] = [ui, vi, timei] means
 * that there is a road between intersections ui and vi that takes timei minutes to travel. You
 * want to know in how many ways you can travel from intersection 0 to intersection n - 1 in the
 * shortest amount of time.
 *
 * Return the number of ways you can arrive at your destination in the shortest amount of time.
 * Since the answer may be large, return it modulo 109 + 7.
 */

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function(n, roads) {
  const MOD = 1e9 + 7;
  const graph = Array.from({ length: n }, () => []);
  const distances = new Array(n).fill(Infinity);
  const ways = new Array(n).fill(0);

  for (const [u, v, time] of roads) {
    graph[u].push([v, time]);
    graph[v].push([u, time]);
  }

  const queue = [[0, 0]];
  distances[0] = 0;
  ways[0] = 1;

  while (queue.length) {
    const [dist, node] = queue.shift();

    if (dist > distances[node]) continue;

    for (const [next, time] of graph[node]) {
      const newDist = dist + time;

      if (newDist < distances[next]) {
        distances[next] = newDist;
        ways[next] = ways[node];
        queue.push([newDist, next]);
        queue.sort((a, b) => a[0] - b[0]);
      } else if (newDist === distances[next]) {
        ways[next] = (ways[next] + ways[node]) % MOD;
      }
    }
  }

  return ways[n - 1];
};
