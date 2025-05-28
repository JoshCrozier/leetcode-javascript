/**
 * 3372. Maximize the Number of Target Nodes After Connecting Trees I
 * https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/
 * Difficulty: Medium
 *
 * There exist two undirected trees with n and m nodes, with distinct labels in ranges [0, n - 1]
 * and [0, m - 1], respectively.
 *
 * You are given two 2D integer arrays edges1 and edges2 of lengths n - 1 and m - 1, respectively,
 * where edges1[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the first
 * tree and edges2[i] = [ui, vi] indicates that there is an edge between nodes ui and vi in the
 * second tree. You are also given an integer k.
 *
 * Node u is target to node v if the number of edges on the path from u to v is less than or equal
 * to k. Note that a node is always target to itself.
 *
 * Return an array of n integers answer, where answer[i] is the maximum possible number of nodes
 * target to node i of the first tree if you have to connect one node from the first tree to
 * another node in the second tree.
 *
 * Note that queries are independent from each other. That is, for every query you will remove
 * the added edge before proceeding to the next query.
 */

/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @param {number} k
 * @return {number[]}
 */
var maxTargetNodes = function(edges1, edges2, k) {
  const graph1 = buildGraph(edges1);
  const graph2 = buildGraph(edges2);
  const n = edges1.length + 1;
  const m = edges2.length + 1;

  let tree2Max = 0;
  if (k > 0) {
    tree2Max = Math.max(...Array.from({ length: m }, (_, i) =>
      countReachable(graph2, i, k - 1)
    ));
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    const tree1Count = countReachable(graph1, i, k);
    result.push(tree1Count + tree2Max);
  }

  return result;

  function buildGraph(edges) {
    const graph = {};
    for (const [u, v] of edges) {
      if (!graph[u]) graph[u] = [];
      if (!graph[v]) graph[v] = [];
      graph[u].push(v);
      graph[v].push(u);
    }
    return graph;
  }

  function countReachable(graph, start, maxDist) {
    const queue = [start];
    const visited = new Set([start]);
    let count = 1;
    let dist = 0;

    while (queue.length > 0 && dist < maxDist) {
      const size = queue.length;
      dist++;
      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        if (graph[node]) {
          for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
              visited.add(neighbor);
              queue.push(neighbor);
              count++;
            }
          }
        }
      }
    }
    return count;
  }
};
