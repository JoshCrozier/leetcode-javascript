/**
 * 1466. Reorder Routes to Make All Paths Lead to the City Zero
 * https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/
 * Difficulty: Medium
 *
 * There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way
 * to travel between two different cities (this network form a tree). Last year, The ministry
 * of transport decided to orient the roads in one direction because they are too narrow.
 *
 * Roads are represented by connections where connections[i] = [ai, bi] represents a road from
 * city ai to city bi.
 *
 * This year, there will be a big event in the capital (city 0), and many people want to travel
 * to this city.
 *
 * Your task consists of reorienting some roads such that each city can visit the city 0. Return
 * the minimum number of edges changed.

It's guaranteed that each city can reach city 0 after reorder.
 */

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
  const graph = new Array(n).fill(null).map(() => []);

  connections.forEach(([k, v]) => {
    graph[k].push([v, 1]);
    graph[v].push([k, 0]);
  });

  function dfs(node, parent) {
    let count = 0;

    graph[node].forEach(([k, v]) => {
      if (k !== parent) {
        count += v;
        count += dfs(k, node);
      }
    });

    return count;
  }

  return dfs(0, -1);
};
