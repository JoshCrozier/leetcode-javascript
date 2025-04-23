/**
 * 1617. Count Subtrees With Max Distance Between Cities
 * https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/
 * Difficulty: Hard
 *
 * There are n cities numbered from 1 to n. You are given an array edges of size n-1, where
 * edges[i] = [ui, vi] represents a bidirectional edge between cities ui and vi. There exists
 * a unique path between each pair of cities. In other words, the cities form a tree.
 *
 * A subtree is a subset of cities where every city is reachable from every other city in the
 * subset, where the path between each pair passes through only the cities from the subset.
 * Two subtrees are different if there is a city in one subtree that is not present in the other.
 *
 * For each d from 1 to n-1, find the number of subtrees in which the maximum distance between
 * any two cities in the subtree is equal to d.
 *
 * Return an array of size n-1 where the dth element (1-indexed) is the number of subtrees in
 * which the maximum distance between any two cities is equal to d.
 *
 * Notice that the distance between the two cities is the number of edges in the path between them.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var countSubgraphsForEachDiameter = function(n, connections) {
  const adjacencyList = Array.from({ length: n }, () => []);
  for (const [u, v] of connections) {
    adjacencyList[u - 1].push(v - 1);
    adjacencyList[v - 1].push(u - 1);
  }

  const diameterCounts = new Array(n - 1).fill(0);

  for (let mask = 1; mask < 1 << n; mask++) {
    const selectedNodes = Array(n).fill(0);
    let nodeCount = 0;
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        selectedNodes[i] = 1;
        nodeCount++;
      }
    }

    if (nodeCount < 2) continue;

    const start = selectedNodes.findIndex(bit => bit);
    const { maxDist: dist1, farthestNode, distances } = findMaxDistance(selectedNodes, start);

    if (distances.some((d, i) => selectedNodes[i] && d === -1)) continue;

    const { maxDist: dist2 } = findMaxDistance(selectedNodes, farthestNode);

    if (dist2 > 0) {
      diameterCounts[dist2 - 1]++;
    }
  }

  return diameterCounts;

  function findMaxDistance(nodes, start) {
    const distances = new Array(n).fill(-1);
    const queue = [start];
    distances[start] = 0;
    let maxDist = 0;
    let farthestNode = start;

    while (queue.length) {
      const current = queue.shift();
      for (const neighbor of adjacencyList[current]) {
        if (nodes[neighbor] && distances[neighbor] === -1) {
          distances[neighbor] = distances[current] + 1;
          if (distances[neighbor] > maxDist) {
            maxDist = distances[neighbor];
            farthestNode = neighbor;
          }
          queue.push(neighbor);
        }
      }
    }

    return { maxDist, farthestNode, distances };
  }
};
