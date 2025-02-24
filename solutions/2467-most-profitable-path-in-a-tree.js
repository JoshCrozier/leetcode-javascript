/**
 * 2467. Most Profitable Path in a Tree
 * https://leetcode.com/problems/most-profitable-path-in-a-tree/
 * Difficulty: Medium
 *
 * There is an undirected tree with n nodes labeled from 0 to n - 1, rooted at node 0. You are
 * given a 2D integer array edges of length n - 1 where edges[i] = [ai, bi] indicates that
 * there is an edge between nodes ai and bi in the tree.
 *
 * At every node i, there is a gate. You are also given an array of even integers amount, where
 * amount[i] represents:
 * - the price needed to open the gate at node i, if amount[i] is negative, or,
 * - the cash reward obtained on opening the gate at node i, otherwise.
 *
 * The game goes on as follows:
 * - Initially, Alice is at node 0 and Bob is at node bob.
 * - At every second, Alice and Bob each move to an adjacent node. Alice moves towards some leaf
 *   node, while Bob moves towards node 0.
 * - For every node along their path, Alice and Bob either spend money to open the gate at that
 *   node, or accept the reward. Note that:
 *   - If the gate is already open, no price will be required, nor will there be any cash reward.
 *   - If Alice and Bob reach the node simultaneously, they share the price/reward for opening
 *     the gate there. In other words, if the price to open the gate is c, then both Alice and
 *     Bob pay c / 2 each. Similarly, if the reward at the gate is c, both of them receive
 *     c / 2 each.
 * - If Alice reaches a leaf node, she stops moving. Similarly, if Bob reaches node 0, he stops
 *   moving. Note that these events are independent of each other.
 *
 * Return the maximum net income Alice can have if she travels towards the optimal leaf node.
 */

/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function(edges, bob, amount) {
  const graph = new Array(edges.length + 1).fill().map(() => []);
  const path = new Array(edges.length + 1).fill(-1);

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  function traceInitialPath(node, time) {
    path[node] = time;
    if (node === 0) {
      return true;
    }
    for (const next of graph[node]) {
      if (path[next] === -1 && traceInitialPath(next, time + 1)) {
        return true;
      }
    }
    path[node] = -1;
    return false;
  }

  traceInitialPath(bob, 0);

  function dfs(node, parent, time, income) {
    const current = (time < path[node] || path[node] === -1)
      ? amount[node]
      : time === path[node] ? amount[node] / 2 : 0;
    let maxIncome = graph[node].length === 1 && node !== 0 ? income + current : -Infinity;

    for (const next of graph[node]) {
      if (next !== parent) {
        maxIncome = Math.max(maxIncome, dfs(next, node, time + 1, income + current));
      }
    }

    return maxIncome === -Infinity ? income + current : maxIncome;
  }

  return dfs(0, -1, 0, 0);
};
