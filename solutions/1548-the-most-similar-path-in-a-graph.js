/**
 * 1548. The Most Similar Path in a Graph
 * https://leetcode.com/problems/the-most-similar-path-in-a-graph/
 * Difficulty: Hard
 *
 * We have n cities and m bi-directional roads where roads[i] = [ai, bi] connects city ai
 * with city bi. Each city has a name consisting of exactly three upper-case English letters
 * given in the string array names. Starting at any city x, you can reach any city y where
 * y != x (i.e., the cities and the roads are forming an undirected connected graph).
 *
 * You will be given a string array targetPath. You should find a path in the graph of the
 * same length and with the minimum edit distance to targetPath.
 *
 * You need to return the order of the nodes in the path with the minimum edit distance.
 * The path should be of the same length of targetPath and should be valid (i.e., there
 * should be a direct road between ans[i] and ans[i + 1]). If there are multiple answers
 * return any one of them.
 */

/**
 * @param {number} n
 * @param {number[][]} roads
 * @param {string[]} names
 * @param {string[]} targetPath
 * @return {number[]}
 */
var mostSimilar = function(n, roads, names, targetPath) {
  const graph = new Array(n).fill().map(() => []);
  for (const [a, b] of roads) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const m = targetPath.length;
  const dp = new Array(m).fill().map(() => new Array(n).fill(Infinity));
  const parent = new Array(m).fill().map(() => new Array(n).fill(-1));

  for (let city = 0; city < n; city++) {
    dp[0][city] = names[city] === targetPath[0] ? 0 : 1;
  }

  for (let step = 1; step < m; step++) {
    for (let city = 0; city < n; city++) {
      for (const neighbor of graph[city]) {
        const cost = dp[step - 1][neighbor] + (names[city] === targetPath[step] ? 0 : 1);
        if (cost < dp[step][city]) {
          dp[step][city] = cost;
          parent[step][city] = neighbor;
        }
      }
    }
  }

  let minCost = Infinity;
  let lastCity = -1;
  for (let city = 0; city < n; city++) {
    if (dp[m - 1][city] < minCost) {
      minCost = dp[m - 1][city];
      lastCity = city;
    }
  }

  const result = [];
  let currentCity = lastCity;
  for (let step = m - 1; step >= 0; step--) {
    result.unshift(currentCity);
    currentCity = parent[step][currentCity];
  }

  return result;
};
