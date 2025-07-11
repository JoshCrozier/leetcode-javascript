/**
 * 2378. Choose Edges to Maximize Score in a Tree
 * https://leetcode.com/problems/choose-edges-to-maximize-score-in-a-tree/
 * Difficulty: Medium
 *
 * You are given a weighted tree consisting of n nodes numbered from 0 to n - 1.
 *
 * The tree is rooted at node 0 and represented with a 2D array edges of size n where
 * edges[i] = [pari, weighti] indicates that node pari is the parent of node i, and the
 * edge between them has a weight equal to weighti. Since the root does not have a parent,
 * you have edges[0] = [-1, -1].
 *
 * Choose some edges from the tree such that no two chosen edges are adjacent and the sum
 * of the weights of the chosen edges is maximized.
 *
 * Return the maximum sum of the chosen edges.
 *
 * Note:
 * - You are allowed to not choose any edges in the tree, the sum of weights in this case will be 0.
 * - Two edges Edge1 and Edge2 in the tree are adjacent if they have a common node.
 *   - In other words, they are adjacent if Edge1 connects nodes a and b and Edge2 connects nodes
 *     b and c.
 */

/**
 * @param {number[][]} edges
 * @return {number}
 */
var maxScore = function(edges) {
  const n = edges.length;
  const children = new Array(n).fill().map(() => []);
  let root = 0;

  for (let i = 0; i < n; i++) {
    if (edges[i][0] >= 0) {
      children[edges[i][0]].push([i, edges[i][1]]);
    } else {
      root = i;
    }
  }

  const [skipRoot, takeRoot] = dfs(root);
  return Math.max(skipRoot, takeRoot);

  function dfs(node) {
    let skip = 0;
    let take = 0;

    for (const [child, weight] of children[node]) {
      const [childSkip, childTake] = dfs(child);
      skip += childTake;
      take = Math.max(take, childSkip - childTake + weight);
    }

    return [skip, take + skip];
  }
};
