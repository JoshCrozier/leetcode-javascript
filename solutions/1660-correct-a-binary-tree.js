/**
 * 1660. Correct a Binary Tree
 * https://leetcode.com/problems/correct-a-binary-tree/
 * Difficulty: Medium
 *
 * You have a binary tree with a small defect. There is exactly one invalid node where its right
 * child incorrectly points to another node at the same depth but to the invalid node's right.
 *
 * Given the root of the binary tree with this defect, root, return the root of the binary tree
 * after removing this invalid node and every node underneath it (minus the node it incorrectly
 * points to).
 *
 * Custom testing:
 * The test input is read as 3 lines:
 * - TreeNode root
 * - int fromNode (not available to correctBinaryTree)
 * - int toNode (not available to correctBinaryTree)
 *
 * After the binary tree rooted at root is parsed, the TreeNode with value of fromNode will have
 * its right child pointer pointing to the TreeNode with a value of toNode. Then, root is passed
 * to correctBinaryTree.
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
 * @param {TreeNode} root
 * @param {number} from
 * @param {number} to
 * @return {TreeNode}
 */
var correctBinaryTree = function(root) {
  const set = new Set();
  return traverse(root, null, false);

  function traverse(node, parent, isLeft) {
    if (!node) return null;

    if (node.right && set.has(node.right)) {
      if (parent) {
        if (isLeft) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
      return null;
    }

    set.add(node);

    node.right = traverse(node.right, node, false);
    node.left = traverse(node.left, node, true);

    return node;
  }
};
