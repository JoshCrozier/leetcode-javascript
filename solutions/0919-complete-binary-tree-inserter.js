/**
 * 919. Complete Binary Tree Inserter
 * https://leetcode.com/problems/complete-binary-tree-inserter/
 * Difficulty: Medium
 *
 * A complete binary tree is a binary tree in which every level, except possibly the last,
 * is completely filled, and all nodes are as far left as possible.
 *
 * Design an algorithm to insert a new node to a complete binary tree keeping it complete
 * after the insertion.
 *
 * Implement the CBTInserter class:
 * - CBTInserter(TreeNode root) Initializes the data structure with the root of the complete
 *   binary tree.
 * - int insert(int v) Inserts a TreeNode into the tree with value Node.val == val so that
 *   the tree remains complete, and returns the value of the parent of the inserted TreeNode.
 * - TreeNode get_root() Returns the root node of the tree.
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
var CBTInserter = function(root) {
  this.root = root;
  this.deque = [];

  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (!node.left || !node.right) this.deque.push(node);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
};

/**
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function(val) {
  const node = new TreeNode(val);
  const parent = this.deque[0];
  if (!parent.left) {
    parent.left = node;
  } else {
    parent.right = node;
    this.deque.shift();
  }
  this.deque.push(node);
  return parent.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
  return this.root;
};
