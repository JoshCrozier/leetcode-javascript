/**
 * 1245. Tree Diameter
 * https://leetcode.com/problems/tree-diameter/
 * Difficulty: Medium
 *
 * The diameter of a tree is the number of edges in the longest path in that tree.
 *
 * There is an undirected tree of n nodes labeled from 0 to n - 1. You are given a 2D array
 * edges where edges.length == n - 1 and edges[i] = [ai, bi] indicates that there is an
 * undirected edge between nodes ai and bi in the tree.
 *
 * Return the diameter of the tree.
 */

/**
 * @param {number[][]} edges
 * @return {number}
 */
var treeDiameter = function(edges) {
  if (edges.length === 0) return 0;

  const graph = new Map();
  for (const [a, b] of edges) {
    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);
    graph.get(a).push(b);
    graph.get(b).push(a);
  }

  const [farthestFromStart] = bfs(0);
  const [, diameter] = bfs(farthestFromStart);

  return diameter;

  function bfs(start) {
    const visited = new Set();
    const queue = [[start, 0]];
    visited.add(start);
    let farthestNode = start;
    let maxDistance = 0;

    while (queue.length > 0) {
      const [node, distance] = queue.shift();

      if (distance > maxDistance) {
        maxDistance = distance;
        farthestNode = node;
      }

      for (const neighbor of graph.get(node) || []) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([neighbor, distance + 1]);
        }
      }
    }

    return [farthestNode, maxDistance];
  }
};
