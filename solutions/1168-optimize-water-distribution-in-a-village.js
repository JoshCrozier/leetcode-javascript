/**
 * 1168. Optimize Water Distribution in a Village
 * https://leetcode.com/problems/optimize-water-distribution-in-a-village/
 * Difficulty: Hard
 *
 * There are n houses in a village. We want to supply water for all the houses by building
 * wells and laying pipes.
 *
 * For each house i, we can either build a well inside it directly with cost wells[i - 1]
 * (note the -1 due to 0-indexing), or pipe in water from another well to it. The costs
 * to lay pipes between houses are given by the array pipes where each
 * pipes[j] = [house1j, house2j, costj] represents the cost to connect house1j and house2j
 * together using a pipe. Connections are bidirectional, and there could be multiple valid
 * connections between the same two houses with different costs.
 *
 * Return the minimum total cost to supply water to all houses.
 */

/**
 * @param {number} n
 * @param {number[]} wells
 * @param {number[][]} pipes
 * @return {number}
 */
var minCostToSupplyWater = function(n, wells, pipes) {
  const edges = [];

  for (let i = 0; i < n; i++) {
    edges.push([0, i + 1, wells[i]]);
  }

  for (const [house1, house2, cost] of pipes) {
    edges.push([house1, house2, cost]);
  }

  edges.sort((a, b) => a[2] - b[2]);

  const parent = Array.from({ length: n + 1 }, (_, i) => i);
  let result = 0;
  let edgesUsed = 0;

  for (const [from, to, cost] of edges) {
    if (union(from, to)) {
      result += cost;
      edgesUsed++;
      if (edgesUsed === n) break;
    }
  }

  return result;

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX !== rootY) {
      parent[rootX] = rootY;
      return true;
    }
    return false;
  }
};
