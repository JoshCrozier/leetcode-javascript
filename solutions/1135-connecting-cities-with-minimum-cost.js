/**
 * 1135. Connecting Cities With Minimum Cost
 * https://leetcode.com/problems/connecting-cities-with-minimum-cost/
 * Difficulty: Medium
 *
 * There are n cities labeled from 1 to n. You are given the integer n and an array
 * connections where connections[i] = [xi, yi, costi] indicates that the cost of connecting
 * city xi and city yi (bidirectional connection) is costi.
 *
 * Return the minimum cost to connect all the n cities such that there is at least one path
 * between each pair of cities. If it is impossible to connect all the n cities, return -1,
 *
 * The cost is the sum of the connections' costs used.
 */

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function(n, connections) {
  const parent = Array.from({ length: n + 1 }, (_, i) => i);

  connections.sort((a, b) => a[2] - b[2]);

  let totalCost = 0;
  let edgesUsed = 0;

  for (const [city1, city2, cost] of connections) {
    if (union(city1, city2)) {
      totalCost += cost;
      edgesUsed++;

      if (edgesUsed === n - 1) {
        return totalCost;
      }
    }
  }

  return -1;

  function findParent(x) {
    if (parent[x] !== x) {
      parent[x] = findParent(parent[x]);
    }
    return parent[x];
  }

  function union(x, y) {
    const rootX = findParent(x);
    const rootY = findParent(y);

    if (rootX !== rootY) {
      parent[rootX] = rootY;
      return true;
    }
    return false;
  }
};
