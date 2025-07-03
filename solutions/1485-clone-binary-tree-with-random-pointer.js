/**
 * 1485. Clone Binary Tree With Random Pointer
 * https://leetcode.com/problems/clone-binary-tree-with-random-pointer/
 * Difficulty: Medium
 *
 * A binary tree is given such that each node contains an additional random pointer which
 * could point to any node in the tree or null.
 *
 * Return a deep copy of the tree.
 *
 * The tree is represented in the same input/output way as normal binary trees where each
 * node is represented as a pair of [val, random_index] where:
 * - val: an integer representing Node.val
 * - random_index: the index of the node (in the input) where the random pointer points to,
 *   or null if it does not point to any node.
 *
 * You will be given the tree in class Node and you should return the cloned tree in class
 * NodeCopy. NodeCopy class is just a clone of Node class with the same attributes and constructors.
 */

/**
 * // Definition for a _Node.
 * function _Node(val, left, right, random) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.random = random === undefined ? null : random;
 * };
 */

/**
 * @param {_Node} root
 * @return {NodeCopy}
 */
var copyRandomBinaryTree = function(root) {
  if (!root) return null;
  const nodeMap = new Map();
  return createCopy(root);

  function createCopy(node) {
    if (!node) return null;
    if (nodeMap.has(node)) return nodeMap.get(node);

    const copy = new NodeCopy(node.val);
    nodeMap.set(node, copy);

    copy.left = createCopy(node.left);
    copy.right = createCopy(node.right);
    copy.random = createCopy(node.random);

    return copy;
  }
};
