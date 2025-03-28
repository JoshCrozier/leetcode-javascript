/**
 * 951. Flip Equivalent Binary Trees
 * https://leetcode.com/problems/flip-equivalent-binary-trees/
 * Difficulty: Medium
 *
 * For a binary tree T, we can define a flip operation as follows: choose any node, and swap the
 * left and right child subtrees.
 *
 * A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y
 * after some number of flip operations.
 *
 * Given the roots of two binary trees root1 and root2, return true if the two trees are flip
 * equivalent or false otherwise.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
  return helper(root1, root2);

  function helper(node1, node2) {
    if (!node1 && !node2) return true;
    if (!node1 || !node2 || node1.val !== node2.val) return false;
    return (helper(node1.left, node2.left) && helper(node1.right, node2.right))
      || (helper(node1.left, node2.right) && helper(node1.right, node2.left));
  }
};
