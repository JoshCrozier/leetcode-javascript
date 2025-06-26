/**
 * 776. Split BST
 * https://leetcode.com/problems/split-bst/
 * Difficulty: Medium
 *
 * Given the root of a binary search tree (BST) and an integer target, split the tree into
 * two subtrees where the first subtree has nodes that are all smaller or equal to the
 * target value, while the second subtree has all nodes that are greater than the target
 * value. It is not necessarily the case that the tree contains a node with the value target.
 *
 * Additionally, most of the structure of the original tree should remain. Formally, for
 * any child c with parent p in the original tree, if they are both in the same subtree
 * after the split, then node c should still have the parent p.
 *
 * Return an array of the two roots of the two subtrees in order.
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
 * @param {number} target
 * @return {TreeNode[]}
 */
var splitBST = function(root, target) {
  if (!root) return [null, null];

  if (root.val <= target) {
    const [smaller, larger] = splitBST(root.right, target);
    root.right = smaller;
    return [root, larger];
  } else {
    const [smaller, larger] = splitBST(root.left, target);
    root.left = larger;
    return [smaller, root];
  }
};
