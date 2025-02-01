/**
 * 173. Binary Search Tree Iterator
 * https://leetcode.com/problems/binary-search-tree-iterator/
 * Difficulty: Medium
 *
 * Implement the BSTIterator class that represents an iterator over the in-order traversal
 * of a binary search tree (BST):
 * - BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of
 *   the BST is given as part of the constructor. The pointer should be initialized to a
 *   non-existent number smaller than any element in the BST.
 * - boolean hasNext() Returns true if there exists a number in the traversal to the right
 *   of the pointer, otherwise returns false.
 * - int next() Moves the pointer to the right, then returns the number at the pointer.
 *
 * Notice that by initializing the pointer to a non-existent smallest number, the first call
 * to next() will return the smallest element in the BST.
 *
 * You may assume that next() calls will always be valid. That is, there will be at least a
 * next number in the in-order traversal when next() is called.
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
 */
var BSTIterator = function(root) {
  this.stack = [];
  this.root = root;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  while (this.root) {
    this.stack.push(this.root);
    this.root = this.root.left;
  }
  this.root = this.stack.pop();

  const result = this.root.val;
  this.root = this.root.right;
  return result;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.root || this.stack.length;
};
