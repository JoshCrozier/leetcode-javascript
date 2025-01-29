/**
 * 117. Populating Next Right Pointers in Each Node II
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
 * Difficulty: Medium
 *
 * Given a binary tree, populate each next pointer to point to its next right node.
 * If there is no next right node, the next pointer should be set to NULL.
 *
 * Initially, all next pointers are set to NULL.
 */

/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
  if (root === null) return root;

  const depth = 0;
  const stack = [[root, depth]];

  while (stack.length) {
    const [node, depth] = stack.shift();
    if (stack.length) {
      const [nextNode, nextDepth] = stack[0];
      if (depth === nextDepth) {
        node.next = nextNode;
      }
    }
    if (node.left) {
      stack.push([node.left, depth + 1]);
    }
    if (node.right) {
      stack.push([node.right, depth + 1]);
    }
  }

  return root;
};
