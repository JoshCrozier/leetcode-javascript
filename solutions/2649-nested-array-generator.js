/**
 * 2649. Nested Array Generator
 * https://leetcode.com/problems/nested-array-generator/
 * Difficulty: Medium
 *
 * Given a multi-dimensional array of integers, return a generator object which yields
 * integers in the same order as inorder traversal.
 *
 * A multi-dimensional array is a recursive data structure that contains both integers
 * and other multi-dimensional arrays.
 *
 * inorder traversal iterates over each array from left to right, yielding any integers
 * it encounters or applying inorder traversal to any arrays it encounters.
 */

/**
 * @param {Array} input
 * @return {Generator}
 */
var inorderTraversal = function* (input) {
  for (const item of input) {
    if (!Array.isArray(item)) yield item;
    else yield* inorderTraversal(item);
  }
};
