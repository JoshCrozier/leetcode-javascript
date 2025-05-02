/**
 * 1857. Largest Color Value in a Directed Graph
 * https://leetcode.com/problems/largest-color-value-in-a-directed-graph/
 * Difficulty: Hard
 *
 * There is a directed graph of n colored nodes and m edges. The nodes are numbered from 0 to n - 1.
 *
 * You are given a string colors where colors[i] is a lowercase English letter representing the
 * color of the ith node in this graph (0-indexed). You are also given a 2D array edges where
 * edges[j] = [aj, bj] indicates that there is a directed edge from node aj to node bj.
 *
 * A valid path in the graph is a sequence of nodes x1 -> x2 -> x3 -> ... -> xk such that there
 * is a directed edge from xi to xi+1 for every 1 <= i < k. The color value of the path is the
 * number of nodes that are colored the most frequently occurring color along that path.
 *
 * Return the largest color value of any valid path in the given graph, or -1 if the graph
 * contains a cycle.
 */

/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function(colors, edges) {
  const nodeCount = colors.length;
  const adjacencyList = Array.from({ length: nodeCount }, () => []);
  const inDegree = new Array(nodeCount).fill(0);
  const colorCounts = Array.from({ length: nodeCount }, () => new Array(26).fill(0));
  const queue = [];
  let maxColorValue = 0;
  let processedNodes = 0;

  for (const [from, to] of edges) {
    adjacencyList[from].push(to);
    inDegree[to]++;
  }

  for (let i = 0; i < nodeCount; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const current = queue.shift();
    processedNodes++;
    const colorIndex = colors.charCodeAt(current) - 97;
    colorCounts[current][colorIndex]++;

    for (const next of adjacencyList[current]) {
      for (let i = 0; i < 26; i++) {
        colorCounts[next][i] = Math.max(colorCounts[next][i], colorCounts[current][i]);
      }
      if (--inDegree[next] === 0) queue.push(next);
    }

    maxColorValue = Math.max(maxColorValue, ...colorCounts[current]);
  }

  return processedNodes === nodeCount ? maxColorValue : -1;
};
