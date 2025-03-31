/**
 * 1008. Construct Binary Search Tree from Preorder Traversal
 * https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/
 * Difficulty: Medium
 *
 * Given an array of integers preorder, which represents the preorder traversal of a BST (i.e.,
 * binary search tree), construct the tree and return its root.
 *
 * It is guaranteed that there is always possible to find a binary search tree with the given
 * requirements for the given test cases.
 *
 * A binary search tree is a binary tree where for every node, any descendant of Node.left has
 * a value strictly less than Node.val, and any descendant of Node.right has a value strictly
 * greater than Node.val.
 *
 * A preorder traversal of a binary tree displays the value of the node first, then traverses
 * Node.left, then traverses Node.right.
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
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  let index = 0;
  return buildBST(Infinity);

  function buildBST(bound) {
    if (index >= preorder.length || preorder[index] > bound) return null;

    const node = new TreeNode(preorder[index++]);
    node.left = buildBST(node.val);
    node.right = buildBST(bound);

    return node;
  }
};
