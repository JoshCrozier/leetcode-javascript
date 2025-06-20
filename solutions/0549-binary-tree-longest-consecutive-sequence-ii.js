/**
 * 549. Binary Tree Longest Consecutive Sequence II
 * https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, return the length of the longest consecutive path in the tree.
 *
 * A consecutive path is a path where the values of the consecutive nodes in the path differ by one.
 * This path can be either increasing or decreasing.
 * - For example, [1,2,3,4] and [4,3,2,1] are both considered valid, but the path [1,2,4,3] is
 *   not valid.
 *
 * On the other hand, the path can be in the child-Parent-child order, where not necessarily be
 * parent-child order.
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
 * @return {number}
 */
var longestConsecutive = function(root) {
  let maxLength = 0;
  traverse(root);
  return maxLength;

  function traverse(node) {
    if (!node) return [0, 0];

    let inc = 1;
    let dec = 1;

    if (node.left) {
      const [leftInc, leftDec] = traverse(node.left);
      if (node.val === node.left.val + 1) {
        dec = Math.max(dec, leftDec + 1);
      } else if (node.val === node.left.val - 1) {
        inc = Math.max(inc, leftInc + 1);
      }
    }

    if (node.right) {
      const [rightInc, rightDec] = traverse(node.right);
      if (node.val === node.right.val + 1) {
        dec = Math.max(dec, rightDec + 1);
      } else if (node.val === node.right.val - 1) {
        inc = Math.max(inc, rightInc + 1);
      }
    }

    maxLength = Math.max(maxLength, inc + dec - 1);
    return [inc, dec];
  }
};
