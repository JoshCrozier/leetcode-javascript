/**
 * 1586. Binary Search Tree Iterator II
 * https://leetcode.com/problems/binary-search-tree-iterator-ii/
 * Difficulty: Medium
 *
 * Implement the BSTIterator class that represents an iterator over the in-order traversal
 * of a binary search tree (BST):
 * - BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the
 *   BST is given as part of the constructor. The pointer should be initialized to a non-existent
 *   number smaller than any element in the BST.
 * - boolean hasNext() Returns true if there exists a number in the traversal to the right of the
 *   pointer, otherwise returns false.
 * - int next() Moves the pointer to the right, then returns the number at the pointer.
 * - boolean hasPrev() Returns true if there exists a number in the traversal to the left of the
 *   pointer, otherwise returns false.
 * - int prev() Moves the pointer to the left, then returns the number at the pointer.
 *
 * Notice that by initializing the pointer to a non-existent smallest number, the first call to
 * next() will return the smallest element in the BST.
 *
 * You may assume that next() and prev() calls will always be valid. That is, there will be at
 * least a next/previous number in the in-order traversal when next()/prev() is called.
 */

/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.inorderValues = [];
  this.currentIndex = -1;
  this.inorderTraversal(root);
};

/**
 * @param {TreeNode} node
 */
BSTIterator.prototype.inorderTraversal = function(node) {
  if (!node) return;
  this.inorderTraversal(node.left);
  this.inorderValues.push(node.val);
  this.inorderTraversal(node.right);
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.currentIndex + 1 < this.inorderValues.length;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  this.currentIndex++;
  return this.inorderValues[this.currentIndex];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasPrev = function() {
  return this.currentIndex > 0;
};

/**
 * @return {number}
 */
BSTIterator.prototype.prev = function() {
  this.currentIndex--;
  return this.inorderValues[this.currentIndex];
};
