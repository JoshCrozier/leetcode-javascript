/**
 * 802. Find Eventual Safe States
 * https://leetcode.com/problems/find-eventual-safe-states/
 * Difficulty: Medium
 *
 * There is a directed graph of n nodes with each node labeled from 0 to n - 1. The graph is
 * represented by a 0-indexed 2D integer array graph where graph[i] is an integer array of
 * nodes adjacent to node i, meaning there is an edge from node i to each node in graph[i].
 *
 * A node is a terminal node if there are no outgoing edges. A node is a safe node if every
 * possible path starting from that node leads to a terminal node (or another safe node).
 *
 * Return an array containing all the safe nodes of the graph. The answer should be sorted
 * in ascending order.
 */

/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
  const nodes = graph.map(() => []);
  const totals = graph.map(n => n.length);
  const queue = totals.map((v, i) => v ? -1 : i).filter(v => v >= 0);
  const result = [];

  graph.forEach((n, i) => n.forEach(v => nodes[v].push(i)));

  while (queue.length) {
    const node = queue.shift();
    result.push(node);
    nodes[node].forEach(v => !--totals[v] && queue.push(v));
  }

  return result.sort((a, b) => a - b);
};
