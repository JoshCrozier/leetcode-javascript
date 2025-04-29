/**
 * 1766. Tree of Coprimes
 * https://leetcode.com/problems/tree-of-coprimes/
 * Difficulty: Hard
 *
 * There is a tree (i.e., a connected, undirected graph that has no cycles) consisting of n nodes
 * numbered from 0 to n - 1 and exactly n - 1 edges. Each node has a value associated with it,
 * and the root of the tree is node 0.
 *
 * To represent this tree, you are given an integer array nums and a 2D array edges. Each nums[i]
 * represents the ith node's value, and each edges[j] = [uj, vj] represents an edge between nodes
 * uj and vj in the tree.
 *
 * Two values x and y are coprime if gcd(x, y) == 1 where gcd(x, y) is the greatest common divisor
 * of x and y.
 *
 * An ancestor of a node i is any other node on the shortest path from node i to the root. A node
 * is not considered an ancestor of itself.
 *
 * Return an array ans of size n, where ans[i] is the closest ancestor to node i such that
 * nums[i] and nums[ans[i]] are coprime, or -1 if there is no such ancestor.
 */

/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number[]}
 */
var getCoprimes = function(nums, edges) {
  const n = nums.length;
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const result = Array(n).fill(-1);
  const valueDepth = Array(51).fill().map(() => []);
  const visited = new Set();

  dfs(0, 0, -1);
  return result;

  function dfs(node, depth, parent) {
    const val = nums[node];
    let maxDepth = -1;
    let closestAncestor = -1;

    for (let i = 1; i <= 50; i++) {
      if (gcd(val, i) === 1 && valueDepth[i].length) {
        const [ancestor, d] = valueDepth[i].at(-1);
        if (d > maxDepth) {
          maxDepth = d;
          closestAncestor = ancestor;
        }
      }
    }

    result[node] = closestAncestor;
    valueDepth[val].push([node, depth]);
    visited.add(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor, depth + 1, node);
      }
    }

    valueDepth[val].pop();
  }

  function gcd(a, b) {
    while (b) [a, b] = [b, a % b];
    return a;
  }
};
