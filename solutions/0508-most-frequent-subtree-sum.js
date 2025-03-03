/**
 * 508. Most Frequent Subtree Sum
 * https://leetcode.com/problems/most-frequent-subtree-sum/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, return the most frequent subtree sum. If there is a tie, return
 * all the values with the highest frequency in any order.
 *
 * The subtree sum of a node is defined as the sum of all the node values formed by the subtree
 * rooted at that node (including the node itself).
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
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  if (!root) return [];

  const map = new Map();
  let result = [];
  let max = 0;

  traverse(root);

  for (const [sum, freq] of map) {
    if (freq > max) {
      max = freq;
      result = [sum];
    } else if (freq === max) {
      result.push(sum);
    }
  }

  return result;

  function traverse(node) {
    if (!node) return 0;
    const sum = node.val + traverse(node.left) + traverse(node.right);
    map.set(sum, (map.get(sum) || 0) + 1);
    return sum;
  }
};
