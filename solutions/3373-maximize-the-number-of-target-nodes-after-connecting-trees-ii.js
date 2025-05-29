/**
 * 3373. Maximize the Number of Target Nodes After Connecting Trees II
 * https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/
 * Difficulty: Hard
 *
 * There exist two undirected trees with n and m nodes, labeled from [0, n - 1] and [0, m - 1],
 * respectively.
 *
 * You are given two 2D integer arrays edges1 and edges2 of lengths n - 1 and m - 1, respectively,
 * where edges1[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the first
 * tree and edges2[i] = [ui, vi] indicates that there is an edge between nodes ui and vi in the
 * second tree.
 *
 * Node u is target to node v if the number of edges on the path from u to v is even. Note that
 * a node is always target to itself.
 *
 * Return an array of n integers answer, where answer[i] is the maximum possible number of nodes
 * that are target to node i of the first tree if you had to connect one node from the first tree
 * to another node in the second tree.
 *
 * Note that queries are independent from each other. That is, for every query you will remove the
 * added edge before proceeding to the next query.
 */

/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number[]}
 */
var maxTargetNodes = function(edges1, edges2) {
  const graph1 = buildGraph(edges1);
  const graph2 = buildGraph(edges2);
  const n = graph1.length;
  const { color: color1 } = getBipartiteGroups(graph1);
  const { maxGroup: maxGroup2 } = getBipartiteGroups(graph2);
  const group0Count = color1.filter(c => c === 0).length;
  const group1Count = n - group0Count;
  const result = new Array(n);

  for (let i = 0; i < n; i++) {
    result[i] = (color1[i] === 0 ? group0Count : group1Count) + maxGroup2;
  }

  return result;

  function buildGraph(edges) {
    const n = edges.length + 1;
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
      graph[u].push(v);
      graph[v].push(u);
    }
    return graph;
  }

  function getBipartiteGroups(graph) {
    const n = graph.length;
    const color = new Array(n).fill(-1);
    const groups = [0, 0];

    for (let i = 0; i < n; i++) {
      if (color[i] === -1) {
        dfs(i, 0);
      }
    }

    return { color, maxGroup: Math.max(groups[0], groups[1]) };

    function dfs(node, c) {
      color[node] = c;
      groups[c]++;
      for (const neighbor of graph[node]) {
        if (color[neighbor] === -1) {
          dfs(neighbor, 1 - c);
        }
      }
    }
  }
};
