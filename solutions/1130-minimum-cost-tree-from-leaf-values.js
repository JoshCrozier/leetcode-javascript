/**
 * 1130. Minimum Cost Tree From Leaf Values
 * https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/
 * Difficulty: Medium
 *
 * Given an array arr of positive integers, consider all binary trees such that:
 * - Each node has either 0 or 2 children;
 * - The values of arr correspond to the values of each leaf in an in-order traversal of the tree.
 * - The value of each non-leaf node is equal to the product of the largest leaf value in its left
 *   and right subtree, respectively.
 *
 * Among all possible binary trees considered, return the smallest possible sum of the values of
 * each non-leaf node. It is guaranteed this sum fits into a 32-bit integer.
 *
 * A node is a leaf if and only if it has zero children.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {
  const stack = [];
  let result = 0;

  for (const value of arr) {
    while (stack.length && stack[stack.length - 1] <= value) {
      const small = stack.pop();
      result += small * Math.min(stack[stack.length - 1] || Infinity, value);
    }
    stack.push(value);
  }

  while (stack.length > 1) {
    const small = stack.pop();
    result += small * stack[stack.length - 1];
  }

  return result;
};
