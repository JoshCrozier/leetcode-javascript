/**
 * 1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree
 * https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
 * Difficulty: Easy
 *
 * Given two binary trees original and cloned and given a reference to a node target in the original
 * tree.
 *
 * The cloned tree is a copy of the original tree.
 *
 * Return a reference to the same node in the cloned tree.
 *
 * Note that you are not allowed to change any of the two trees or the target node and the answer
 * must be a reference to a node in the cloned tree.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
var getTargetCopy = function(original, cloned, target) {
  return traverse(original, cloned);

  function traverse(originalNode, clonedNode) {
    if (!originalNode) return null;
    if (originalNode === target) return clonedNode;

    const leftResult = traverse(originalNode.left, clonedNode.left);
    if (leftResult) return leftResult;

    return traverse(originalNode.right, clonedNode.right);
  }
};
