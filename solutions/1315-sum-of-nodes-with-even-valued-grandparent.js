/**
 * 1315. Sum of Nodes with Even-Valued Grandparent
 * https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, return the sum of values of nodes with an even-valued
 * grandparent. If there are no nodes with an even-valued grandparent, return 0.
 *
 * A grandparent of a node is the parent of its parent if it exists.
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
var sumEvenGrandparent = function(root) {
  let result = 0;
  exploreTree(root, null, null);
  return result;

  function exploreTree(current, parent, grandparent) {
    if (!current) return;

    if (grandparent?.val % 2 === 0) {
      result += current.val;
    }

    exploreTree(current.left, current, parent);
    exploreTree(current.right, current, parent);
  }
};
