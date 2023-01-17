/**
 * 1519. Number of Nodes in the Sub-Tree With the Same Label
 * https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/
 * Difficulty: Medium
 *
 * You are given a tree (i.e. a connected, undirected graph that has no cycles)
 * consisting of n nodes numbered from 0 to n - 1 and exactly n - 1 edges. The
 * root of the tree is the node 0, and each node of the tree has a label which
 * is a lower-case character given in the string labels (i.e. The node with the
 * number i has the label labels[i]).
 *
 * The edges array is given on the form edges[i] = [ai, bi], which means there
 * is an edge between nodes ai and bi in the tree.
 *
 * Return an array of size n where ans[i] is the number of nodes in the subtree
 * of the ith node which have the same label as node i.
 *
 * A subtree of a tree T is the tree consisting of a node in T and all of its
 * descendant nodes.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function(n, edges, labels) {
  const lookup = Array.from(Array(n), () => []);
  const result = new Array(n).fill(0);

  edges.forEach(([x, y]) => {
    lookup[x].push(y);
    lookup[y].push(x);
  });

  function bfs(index, previous, chars = new Array(26).fill(0)) {
    const key = labels.charCodeAt(index) - 97;
    const count = chars[key];
    chars[key]++;
    lookup[index].forEach(i => {
      if (i !== previous) {
        bfs(i, index, chars);
      }
    });
    result[index] = chars[key] - count;
  }

  bfs(0, -1);

  return result;
};
