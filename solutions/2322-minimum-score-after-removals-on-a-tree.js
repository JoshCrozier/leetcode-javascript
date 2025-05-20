/**
 * 2322. Minimum Score After Removals on a Tree
 * https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/
 * Difficulty: Hard
 *
 * There is an undirected connected tree with n nodes labeled from 0 to n - 1 and n - 1 edges.
 *
 * You are given a 0-indexed integer array nums of length n where nums[i] represents the value
 * of the ith node. You are also given a 2D integer array edges of length n - 1 where
 * edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree.
 *
 * Remove two distinct edges of the tree to form three connected components. For a pair of
 * removed edges, the following steps are defined:
 * 1. Get the XOR of all the values of the nodes for each of the three components respectively.
 * 2. The difference between the largest XOR value and the smallest XOR value is the score of
 *    the pair.
 * 3. For example, say the three components have the node values: [4,5,7], [1,9], and [3,3,3].
 *    The three XOR values are 4 ^ 5 ^ 7 = 6, 1 ^ 9 = 8, and 3 ^ 3 ^ 3 = 3. The largest XOR
 *    value is 8 and the smallest XOR value is 3. The score is then 8 - 3 = 5.
 *
 * Return the minimum score of any possible pair of edge removals on the given tree.
 */

/**
* @param {number[]} nums
* @param {number[][]} edges
* @return {number}
*/
var minimumScore = function(nums, edges) {
  const n = nums.length;
  const graph = Array.from({ length: n }, () => []);

  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const totalXor = nums.reduce((acc, num) => acc ^ num, 0);

  const subtreeXor = new Array(n).fill(0);

  const tin = new Array(n);
  const tout = new Array(n);
  let timer = 0;

  function dfs(node, parent) {
    tin[node] = timer++;
    subtreeXor[node] = nums[node];

    for (const neighbor of graph[node]) {
      if (neighbor !== parent) {
        dfs(neighbor, node);
        subtreeXor[node] ^= subtreeXor[neighbor];
      }
    }

    tout[node] = timer++;
  }

  dfs(0, -1);

  function isAncestor(a, b) {
    return tin[a] <= tin[b] && tout[a] >= tout[b];
  }

  let result = Infinity;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      const edge1 = edges[i];
      const edge2 = edges[j];

      let node1;
      if (isAncestor(edge1[0], edge1[1])) {
        node1 = edge1[1];
      } else {
        node1 = edge1[0];
      }
      const subtree1 = subtreeXor[node1];

      let node2;
      if (isAncestor(edge2[0], edge2[1])) {
        node2 = edge2[1];
      } else {
        node2 = edge2[0];
      }
      const subtree2 = subtreeXor[node2];

      let component1;
      let component2;
      let component3;
      if (isAncestor(node1, node2)) {
        component1 = subtree2;
        component2 = subtree1 ^ component1;
        component3 = totalXor ^ subtree1;
      } else if (isAncestor(node2, node1)) {
        component1 = subtree1;
        component2 = subtree2 ^ component1;
        component3 = totalXor ^ subtree2;
      } else {
        component1 = subtree1;
        component2 = subtree2;
        component3 = totalXor ^ component1 ^ component2;
      }

      const maxXor = Math.max(component1, component2, component3);
      const minXor = Math.min(component1, component2, component3);
      result = Math.min(result, maxXor - minXor);
    }
  }

  return result;
};
