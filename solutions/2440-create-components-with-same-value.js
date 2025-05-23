/**
 * 2440. Create Components With Same Value
 * https://leetcode.com/problems/create-components-with-same-value/
 * Difficulty: Hard
 *
 * There is an undirected tree with n nodes labeled from 0 to n - 1.
 *
 * You are given a 0-indexed integer array nums of length n where nums[i] represents the value
 * of the ith node. You are also given a 2D integer array edges of length n - 1 where
 * edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree.
 *
 * You are allowed to delete some edges, splitting the tree into multiple connected components.
 * Let the value of a component be the sum of all nums[i] for which node i is in the component.
 *
 * Return the maximum number of edges you can delete, such that every connected component in
 * the tree has the same value.
 */

/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
var componentValue = function(nums, edges) {
  const n = nums.length;
  const graph = Array.from({ length: n }, () => []);
  const totalSum = nums.reduce((sum, val) => sum + val, 0);

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  for (let i = n; i >= 1; i--) {
    if (totalSum % i === 0) {
      const target = totalSum / i;
      const [, components] = countNodes(0, -1, target);
      if (components === i) {
        return i - 1;
      }
    }
  }

  return 0;

  function countNodes(node, parent, target) {
    let sum = nums[node];
    let components = 0;

    for (const neighbor of graph[node]) {
      if (neighbor !== parent) {
        const [childSum, childComponents] = countNodes(neighbor, node, target);
        sum += childSum;
        components += childComponents;
      }
    }

    if (sum === target) {
      return [0, components + 1];
    }

    return [sum, components];
  }
};
