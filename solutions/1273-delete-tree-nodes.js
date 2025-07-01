/**
 * 1273. Delete Tree Nodes
 * https://leetcode.com/problems/delete-tree-nodes/
 * Difficulty: Medium
 *
 * A tree rooted at node 0 is given as follows:
 * - The number of nodes is nodes;
 * - The value of the ith node is value[i];
 * - The parent of the ith node is parent[i].
 *
 * Remove every subtree whose sum of values of nodes is zero.
 *
 * Return the number of the remaining nodes in the tree.
 */

/**
 * @param {number} nodes
 * @param {number[]} parent
 * @param {number[]} value
 * @return {number}
 */
var deleteTreeNodes = function(nodes, parent, value) {
  const children = new Array(nodes).fill().map(() => []);

  for (let i = 1; i < nodes; i++) {
    children[parent[i]].push(i);
  }

  return dfs(0)[1];

  function dfs(node) {
    let subtreeSum = value[node];
    let subtreeCount = 1;

    for (const child of children[node]) {
      const [childSum, childCount] = dfs(child);
      subtreeSum += childSum;
      subtreeCount += childCount;
    }

    if (subtreeSum === 0) {
      return [0, 0];
    }

    return [subtreeSum, subtreeCount];
  }
};
