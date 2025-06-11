/**
 * 255. Verify Preorder Sequence in Binary Search Tree
 * https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/
 * Difficulty: Medium
 *
 * Given an array of unique integers preorder, return true if it is the correct preorder
 * traversal sequence of a binary search tree.
 */

/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function(preorder) {
  let minLimit = -Infinity;
  const stack = [];

  for (const value of preorder) {
    while (stack.length && stack[stack.length - 1] < value) {
      minLimit = stack.pop();
    }
    if (value <= minLimit) return false;
    stack.push(value);
  }

  return true;
};
