/**
 * 3004. Maximum Subtree of the Same Color
 * https://leetcode.com/problems/maximum-subtree-of-the-same-color/
 * Difficulty: Medium
 *
 * You are given a 2D integer array edges representing a tree with n nodes, numbered from
 * 0 to n - 1, rooted at node 0, where edges[i] = [ui, vi] means there is an edge between
 * the nodes vi and ui.
 *
 * You are also given a 0-indexed integer array colors of size n, where colors[i] is the
 * color assigned to node i.
 *
 * We want to find a node v such that every node in the subtree of v has the same color.
 *
 * Return the size of such subtree with the maximum number of nodes possible.
 */

/**
 * @param {number[][]} edges
 * @param {number[]} colors
 * @return {number}
 */
var maximumSubtreeSize = function(edges, colors) {
  const n = colors.length;
  const graph = new Array(n).fill().map(() => []);

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  let result = 1;

  dfs(0, -1);

  return result;

  function dfs(node, parent) {
    let subtreeSize = 1;
    let isValidSubtree = true;

    for (const child of graph[node]) {
      if (child !== parent) {
        const childSize = dfs(child, node);

        if (colors[child] === colors[node] && childSize > 0) {
          subtreeSize += childSize;
        } else {
          isValidSubtree = false;
        }
      }
    }

    if (isValidSubtree) {
      result = Math.max(result, subtreeSize);
      return subtreeSize;
    }

    return 0;
  }
};
