/**
 * 1928. Minimum Cost to Reach Destination in Time
 * https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/
 * Difficulty: Hard
 *
 * There is a country of n cities numbered from 0 to n - 1 where all the cities are connected by
 * bi-directional roads. The roads are represented as a 2D integer array edges where
 * edges[i] = [xi, yi, timei] denotes a road between cities xi and yi that takes timei minutes
 * to travel. There may be multiple roads of differing travel times connecting the same two
 * cities, but no road connects a city to itself.
 *
 * Each time you pass through a city, you must pay a passing fee. This is represented as a
 * 0-indexed integer array passingFees of length n where passingFees[j] is the amount of dollars
 * you must pay when you pass through city j.
 *
 * In the beginning, you are at city 0 and want to reach city n - 1 in maxTime minutes or less.
 * The cost of your journey is the summation of passing fees for each city that you passed
 * through at some moment of your journey (including the source and destination cities).
 *
 * Given maxTime, edges, and passingFees, return the minimum cost to complete your journey,
 * or -1 if you cannot complete it within maxTime minutes.
 */

/**
 * @param {number} maxTime
 * @param {number[][]} edges
 * @param {number[]} passingFees
 * @return {number}
 */
var minCost = function(maxTime, edges, passingFees) {
  const n = passingFees.length;
  const dp = new Array(n).fill().map(() => new Array(maxTime + 1).fill(Infinity));
  dp[0][0] = passingFees[0];

  const graph = new Array(n).fill().map(() => []);
  for (const [u, v, time] of edges) {
    graph[u].push([v, time]);
    graph[v].push([u, time]);
  }

  const pq = new PriorityQueue((a, b) => a.cost - b.cost);
  pq.enqueue({ cost: passingFees[0], city: 0, time: 0 });

  while (!pq.isEmpty()) {
    const { cost, city, time } = pq.dequeue();
    if (cost > dp[city][time]) continue;

    for (const [nextCity, travelTime] of graph[city]) {
      const newTime = time + travelTime;
      if (newTime > maxTime) continue;

      const newCost = cost + passingFees[nextCity];
      if (newCost < dp[nextCity][newTime]) {
        dp[nextCity][newTime] = newCost;
        pq.enqueue({ cost: newCost, city: nextCity, time: newTime });
      }
    }
  }

  let minCost = Infinity;
  for (let t = 0; t <= maxTime; t++) {
    minCost = Math.min(minCost, dp[n - 1][t]);
  }

  return minCost === Infinity ? -1 : minCost;
};
