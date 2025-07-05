/**
 * 1612. Check If Two Expression Trees are Equivalent
 * https://leetcode.com/problems/check-if-two-expression-trees-are-equivalent/
 * Difficulty: Medium
 *
 * A binary expression tree is a kind of binary tree used to represent arithmetic expressions.
 * Each node of a binary expression tree has either zero or two children. Leaf nodes (nodes
 * with 0 children) correspond to operands (variables), and internal nodes (nodes with two
 * children) correspond to the operators. In this problem, we only consider the '+' operator
 * (i.e. addition).
 *
 * You are given the roots of two binary expression trees, root1 and root2. Return true if
 * the two binary expression trees are equivalent. Otherwise, return false.
 *
 * Two binary expression trees are equivalent if they evaluate to the same value regardless
 * of what the variables are set to.
 */

/**
 * Definition for a binary tree node.
 * function Node(val, left, right) {
 *     this.val = (val===undefined ? " " : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {Node} root1
 * @param {Node} root2
 * @return {boolean}
 */
var checkEquivalence = function(root1, root2) {
  const count1 = getVariableCount(root1);
  const count2 = getVariableCount(root2);
  const variables1 = Object.keys(count1);
  const variables2 = Object.keys(count2);

  if (variables1.length !== variables2.length) return false;

  for (const variable of variables1) {
    if (count1[variable] !== count2[variable]) return false;
  }

  return true;

  function getVariableCount(node) {
    if (!node) return {};

    if (node.val !== '+') {
      return { [node.val]: 1 };
    }

    const leftCount = getVariableCount(node.left);
    const rightCount = getVariableCount(node.right);
    const mergedCount = { ...leftCount };
    for (const variable in rightCount) {
      if (rightCount.hasOwnProperty(variable)) {
        mergedCount[variable] = (mergedCount[variable] || 0) + rightCount[variable];
      }
    }

    return mergedCount;
  }
};
