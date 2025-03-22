/**
 * 2685. Count the Number of Complete Components
 * https://leetcode.com/problems/count-the-number-of-complete-components/
 * Difficulty: Medium
 *
 * You are given an integer n. There is an undirected graph with n vertices, numbered from 0
 * to n - 1. You are given a 2D integer array edges where edges[i] = [ai, bi] denotes that
 * there exists an undirected edge connecting vertices ai and bi.
 *
 * Return the number of complete connected components of the graph.
 *
 * A connected component is a subgraph of a graph in which there exists a path between any
 * two vertices, and no vertex of the subgraph shares an edge with a vertex outside of the
 * subgraph.
 *
 * A connected component is said to be complete if there exists an edge between every pair of
 * its vertices.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
  const adjacencyList = Array.from({ length: n }, () => new Set());
  edges.forEach(([a, b]) => {
    adjacencyList[a].add(b);
    adjacencyList[b].add(a);
  });

  const visited = new Set();
  let result = 0;

  function exploreComponent(vertex) {
    const component = new Set([vertex]);
    const queue = [vertex];
    visited.add(vertex);

    while (queue.length) {
      const current = queue.shift();
      adjacencyList[current].forEach(neighbor => {
        if (!visited.has(neighbor)) {
          component.add(neighbor);
          queue.push(neighbor);
          visited.add(neighbor);
        }
      });
    }
    return component;
  }

  function isComplete(component) {
    const size = component.size;
    return [...component].every(vertex =>
      adjacencyList[vertex].size === size - 1
        && [...adjacencyList[vertex]].every(neighbor => component.has(neighbor))
    );
  }

  for (let vertex = 0; vertex < n; vertex++) {
    if (!visited.has(vertex)) {
      const component = exploreComponent(vertex);
      if (isComplete(component)) result++;
    }
  }

  return result;
};
