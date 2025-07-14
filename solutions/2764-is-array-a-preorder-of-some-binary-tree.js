/**
 * 2764. Is Array a Preorder of Some ‌Binary Tree
 * https://leetcode.com/problems/is-array-a-preorder-of-some-binary-tree/
 * Difficulty: Medium
 *
 * Given a 0-indexed integer 2D array nodes, your task is to determine if the given array represents
 * the preorder traversal of some binary tree.
 *
 * For each index i, nodes[i] = [id, parentId], where id is the id of the node at the index i and
 * parentId is the id of its parent in the tree (if the node has no parent, then parentId == -1).
 *
 * Return true if the given array represents the preorder traversal of some tree, and false
 * otherwise.
 *
 * Note: the preorder traversal of a tree is a recursive way to traverse a tree in which we first
 * visit the current node, then we do the preorder traversal for the left child, and finally, we
 * do it for the right child.
 */

/**
 * @param {number[][]} nodes
 * @return {boolean}
 */
var isPreorder = function(nodes) {
  const children = new Map();
  let root = null;

  for (const [id, parentId] of nodes) {
    if (parentId === -1) {
      root = id;
    } else {
      if (!children.has(parentId)) {
        children.set(parentId, []);
      }
      children.get(parentId).push(id);
    }
  }

  const expectedOrder = [];

  traverse(root);

  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i][0] !== expectedOrder[i]) {
      return false;
    }
  }

  return true;

  function traverse(nodeId) {
    if (nodeId === null) return;

    expectedOrder.push(nodeId);

    const nodeChildren = children.get(nodeId) || [];
    if (nodeChildren.length > 0) {
      traverse(nodeChildren[0]);
    }
    if (nodeChildren.length > 1) {
      traverse(nodeChildren[1]);
    }
  }
};
