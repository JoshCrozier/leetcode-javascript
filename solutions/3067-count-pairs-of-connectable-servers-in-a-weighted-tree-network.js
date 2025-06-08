/**
 * 3067. Count Pairs of Connectable Servers in a Weighted Tree Network
 * https://leetcode.com/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/
 * Difficulty: Medium
 *
 * You are given an unrooted weighted tree with n vertices representing servers numbered from 0
 * to n - 1, an array edges where edges[i] = [ai, bi, weighti] represents a bidirectional edge
 * between vertices ai and bi of weight weighti. You are also given an integer signalSpeed.
 *
 * Two servers a and b are connectable through a server c if:
 * - a < b, a != c and b != c.
 * - The distance from c to a is divisible by signalSpeed.
 * - The distance from c to b is divisible by signalSpeed.
 * - The path from c to b and the path from c to a do not share any edges.
 *
 * Return an integer array count of length n where count[i] is the number of server pairs that are
 * connectable through the server i.
 */

/**
 * @param {number[][]} edges
 * @param {number} signalSpeed
 * @return {number[]}
 */
var countPairsOfConnectableServers = function(edges, signalSpeed) {
  const n = edges.length + 1;
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  const result = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    result[i] = countValidPairs(i);
  }
  return result;

  function countValidPairs(root) {
    function dfs(node, parent, distance) {
      let count = distance % signalSpeed === 0 ? 1 : 0;
      for (const [next, weight] of graph[node]) {
        if (next !== parent) {
          count += dfs(next, node, distance + weight);
        }
      }
      return count;
    }

    let totalPairs = 0;
    const counts = [];
    for (const [child, weight] of graph[root]) {
      const count = dfs(child, root, weight);
      counts.push(count);
    }

    let sum = 0;
    for (const count of counts) {
      totalPairs += sum * count;
      sum += count;
    }
    return totalPairs;
  }
};
