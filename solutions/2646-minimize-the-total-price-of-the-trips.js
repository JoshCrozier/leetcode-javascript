/**
 * 2646. Minimize the Total Price of the Trips
 * https://leetcode.com/problems/minimize-the-total-price-of-the-trips/
 * Difficulty: Hard
 *
 * There exists an undirected and unrooted tree with n nodes indexed from 0 to n - 1. You are
 * given the integer n and a 2D integer array edges of length n - 1, where edges[i] = [ai, bi]
 * indicates that there is an edge between nodes ai and bi in the tree.
 *
 * Each node has an associated price. You are given an integer array price, where price[i] is
 * the price of the ith node.
 *
 * The price sum of a given path is the sum of the prices of all nodes lying on that path.
 *
 * Additionally, you are given a 2D integer array trips, where trips[i] = [starti, endi]
 * indicates that you start the ith trip from the node starti and travel to the node endi
 * by any path you like.
 *
 * Before performing your first trip, you can choose some non-adjacent nodes and halve the
 * prices.
 *
 * Return the minimum total price sum to perform all the given trips.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} price
 * @param {number[][]} trips
 * @return {number}
 */
var minimumTotalPrice = function(n, edges, price, trips) {
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const count = new Array(n).fill(0);

  for (const [start, end] of trips) {
    dfsPath(start, end, -1, []);
  }

  return dp(0, -1, true)[1];

  function dp(node, parent, canHalve) {
    const full = count[node] * price[node];
    const half = full / 2;
    let childrenFull = 0;
    let childrenHalf = 0;

    for (const child of graph[node]) {
      if (child !== parent) {
        const [childFull, childHalf] = dp(child, node, canHalve && node !== -1);
        childrenFull += childFull;
        childrenHalf += childHalf;
      }
    }

    if (canHalve) {
      return [full + childrenHalf, Math.min(full + childrenHalf, half + childrenFull)];
    }
    return [full + childrenHalf, full + childrenHalf];
  }

  function dfsPath(start, end, parent, path) {
    path.push(start);
    if (start === end) {
      for (const node of path) count[node]++;
      return true;
    }
    for (const next of graph[start]) {
      if (next !== parent && dfsPath(next, end, start, path)) {
        return true;
      }
    }
    path.pop();
    return false;
  }
};
