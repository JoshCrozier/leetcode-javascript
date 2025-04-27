/**
 * 1719. Number Of Ways To Reconstruct A Tree
 * https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/
 * Difficulty: Hard
 *
 * You are given an array pairs, where pairs[i] = [xi, yi], and:
 * - There are no duplicates.
 * - xi < yi
 *
 * Let ways be the number of rooted trees that satisfy the following conditions:
 * - The tree consists of nodes whose values appeared in pairs.
 * - A pair [xi, yi] exists in pairs if and only if xi is an ancestor of yi or yi is
 *   an ancestor of xi.
 * - Note: the tree does not have to be a binary tree.
 *
 * Two ways are considered to be different if there is at least one node that has different
 * parents in both ways.
 *
 * Return:
 * - 0 if ways == 0
 * - 1 if ways == 1
 * - 2 if ways > 1
 *
 * A rooted tree is a tree that has a single root node, and all edges are oriented to be
 * outgoing from the root.
 *
 * An ancestor of a node is any node on the path from the root to that node (excluding
 * the node itself). The root has no ancestors.
 */

/**
 * @param {number[][]} pairs
 * @return {number}
 */
var checkWays = function(pairs) {
  const graph = new Map();
  for (const [x, y] of pairs) {
    if (!graph.has(x)) graph.set(x, new Set());
    if (!graph.has(y)) graph.set(y, new Set());
    graph.get(x).add(y);
    graph.get(y).add(x);
  }

  const nodes = [...graph.keys()].sort((a, b) => graph.get(b).size - graph.get(a).size);
  const n = nodes.length;
  if (n === 1) return 1;

  const root = nodes[0];
  if (graph.get(root).size !== n - 1) return 0;

  let equalDegreeCount = 0;
  for (let i = 1; i < n; i++) {
    const node = nodes[i];
    let found = false;

    for (let j = i - 1; j >= 0; j--) {
      const ancestor = nodes[j];
      if (graph.get(node).has(ancestor)) {
        for (const neighbor of graph.get(node)) {
          if (neighbor !== ancestor && !graph.get(ancestor).has(neighbor)) {
            return 0;
          }
        }
        if (graph.get(node).size === graph.get(ancestor).size) {
          equalDegreeCount++;
        }
        found = true;
        break;
      }
    }

    if (!found) return 0;
  }

  return equalDegreeCount > 0 ? 2 : 1;
};
