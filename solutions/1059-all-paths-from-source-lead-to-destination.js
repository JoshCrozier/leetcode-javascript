/**
 * 1059. All Paths from Source Lead to Destination
 * https://leetcode.com/problems/all-paths-from-source-lead-to-destination/
 * Difficulty: Medium
 *
 * Given the edges of a directed graph where edges[i] = [ai, bi] indicates there is an edge
 * between nodes ai and bi, and two nodes source and destination of this graph, determine
 * whether or not all paths starting from source eventually, end at destination, that is:
 * - At least one path exists from the source node to the destination node
 * - If a path exists from the source node to a node with no outgoing edges, then that node
 *   is equal to destination.
 * - The number of possible paths from source to destination is a finite number.
 *
 * Return true if and only if all roads from source lead to destination.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var leadsToDestination = function(n, edges, source, destination) {
  const graph = new Map();
  const states = new Array(n).fill(0);

  for (const [from, to] of edges) {
    if (!graph.has(from)) {
      graph.set(from, []);
    }
    graph.get(from).push(to);
  }

  return dfs(source);

  function dfs(node) {
    if (states[node] === 1) return false;
    if (states[node] === 2) return true;

    states[node] = 1;

    if (!graph.has(node)) {
      states[node] = 2;
      return node === destination;
    }

    for (const neighbor of graph.get(node)) {
      if (!dfs(neighbor)) {
        return false;
      }
    }

    states[node] = 2;
    return true;
  }
};
