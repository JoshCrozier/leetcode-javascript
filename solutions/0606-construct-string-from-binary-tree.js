/**
 * 606. Construct String from Binary Tree
 * https://leetcode.com/problems/construct-string-from-binary-tree/
 * Difficulty: Easy
 *
 * You need to construct a string consists of parenthesis and integers
 * from a binary tree with the preorder traversing way.
 *
 * The null node needs to be represented by empty parenthesis pair "()".
 * And you need to omit all the empty parenthesis pairs that don't
 * affect the one-to-one mapping relationship between the string
 * and the original binary tree.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  return !t ? '' : `${t.val}(${tree2str(t.left)})(${tree2str(t.right)})`.replace(/(\(\)){2}|\(\)(?=$|\))/g, '');
};


// alternative, longer but faster version:
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  let str = t ? `${t.val}` : '';
  if (t && t.right) str += `(${tree2str(t.left)})(${tree2str(t.right)})`;
  else if (t && t.left) str += `(${tree2str(t.left)})`;
  return str;
};
