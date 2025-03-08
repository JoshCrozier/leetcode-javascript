/**
 * 652. Find Duplicate Subtrees
 * https://leetcode.com/problems/find-duplicate-subtrees/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, return all duplicate subtrees.
 *
 * For each kind of duplicate subtrees, you only need to return the root node of any one of them.
 *
 * Two trees are duplicate if they have the same structure with the same node values.
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  const map = new Map();
  const result = [];

  serialize(root);

  return result;

  function serialize(node) {
    if (!node) return '#';
    const key = `${node.val},${serialize(node.left)},${serialize(node.right)}`;
    map.set(key, (map.get(key) || 0) + 1);
    if (map.get(key) === 2) {
      result.push(node);
    }
    return key;
  }
};
