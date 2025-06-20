/**
 * 536. Construct Binary Tree from String
 * https://leetcode.com/problems/construct-binary-tree-from-string/
 * Difficulty: Medium
 *
 * You need to construct a binary tree from a string consisting of parenthesis and integers.
 *
 * The whole input represents a binary tree. It contains an integer followed by zero, one or
 * two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis
 * contains a child binary tree with the same structure.
 *
 * You always start to construct the left child node of the parent first if it exists.
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
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function(s) {
  if (!s) return null;
  let index = 0;
  return constructTree();

  function parseNumber() {
    const isNegative = s[index] === '-';
    if (isNegative) index++;

    let num = 0;
    while (index < s.length && /[0-9]/.test(s[index])) {
      num = num * 10 + parseInt(s[index]);
      index++;
    }

    return isNegative ? -num : num;
  }

  function constructTree() {
    if (index >= s.length) return null;

    const value = parseNumber();
    const node = new TreeNode(value);
    if (index < s.length && s[index] === '(') {
      index++;
      node.left = constructTree();
      index++;
    }

    if (index < s.length && s[index] === '(') {
      index++;
      node.right = constructTree();
      index++;
    }

    return node;
  }
};
