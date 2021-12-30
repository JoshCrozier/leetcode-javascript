/**
 * 116. Populating Next Right Pointers in Each Node
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 * Difficulty: Medium
 *
 * You are given a perfect binary tree where all leaves are on the same level, and
 * every parent has two children. The binary tree has the following definition:
 *
 * Populate each next pointer to point to its next right node. If there is no next
 * right node, the next pointer should be set to NULL.
 *
 * Initially, all next pointers are set to NULL.
 */

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  const order = [];
  traverse(order, root);
  for (let level of order) {
    for (let i = 0; i < level.length - 1; i++) {
      level[i].next = level[i + 1];
    }
  }
  return root;
};

function traverse(order, node, level = 0) {
  if (!node) {
    return [];
  }

  order[level] = order[level] || [];
  order[level].push(node);

  traverse(order, node.left, level + 1);
  traverse(order, node.right, level + 1);
}
