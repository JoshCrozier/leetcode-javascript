/**
 * 590. N-ary Tree Postorder Traversal
 * https://leetcode.com/problems/n-ary-tree-postorder-traversal/
 * Difficulty: Easy
 *
 * Given the root of an n-ary tree, return the postorder traversal of its nodes' values.
 *
 * Nary-Tree input serialization is represented in their level order traversal. Each group
 * of children is separated by the null value (See examples)
 */

/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
  const result = [];
  traverse(root);
  return result;

  function traverse(node) {
    if (!node) return;
    node.children.forEach(child => traverse(child));
    result.push(node.val);
  }
};
