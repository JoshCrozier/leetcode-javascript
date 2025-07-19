/**
 * 3313. Find the Last Marked Nodes in Tree
 * https://leetcode.com/problems/find-the-last-marked-nodes-in-tree/
 * Difficulty: Hard
 *
 * There exists an undirected tree with n nodes numbered 0 to n - 1. You are given a 2D
 * integer array edges of length n - 1, where edges[i] = [ui, vi] indicates that there
 * is an edge between nodes ui and vi in the tree.
 *
 * Initially, all nodes are unmarked. After every second, you mark all unmarked nodes which
 * have at least one marked node adjacent to them.
 *
 * Return an array nodes where nodes[i] is the last node to get marked in the tree, if you
 * mark node i at time t = 0. If nodes[i] has multiple answers for any node i, you can
 * choose any one answer.
 */

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var lastMarkedNodes = function(edges) {
  const n = edges.length + 1;
  const tree = new Array(n).fill().map(() => []);

  for (const [u, v] of edges) {
    tree[u].push(v);
    tree[v].push(u);
  }

  const diameterEndpointA = findFarthestNode(0);
  const diameterEndpointB = findFarthestNode(diameterEndpointA);
  const distancesFromA = getDistances(diameterEndpointA);
  const distancesFromB = getDistances(diameterEndpointB);
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(distancesFromA[i] > distancesFromB[i] ? diameterEndpointA : diameterEndpointB);
  }

  return result;

  function findFarthestNode(startNode) {
    const visited = new Array(n).fill(false);
    visited[startNode] = true;
    const stack = [[startNode, 0]];
    let maxSteps = 0;
    let farthestNode = startNode;

    while (stack.length > 0) {
      const [node, steps] = stack.pop();

      if (steps > maxSteps) {
        farthestNode = node;
        maxSteps = steps;
      }

      for (const neighbor of tree[node]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push([neighbor, steps + 1]);
        }
      }
    }

    return farthestNode;
  }

  function getDistances(startNode) {
    const visited = new Array(n).fill(false);
    visited[startNode] = true;
    const stack = [[startNode, 0]];
    const distances = new Array(n);

    while (stack.length > 0) {
      const [node, steps] = stack.pop();
      distances[node] = steps;

      for (const neighbor of tree[node]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push([neighbor, steps + 1]);
        }
      }
    }

    return distances;
  }
};
