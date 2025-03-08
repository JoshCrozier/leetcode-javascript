/**
 * 662. Maximum Width of Binary Tree
 * https://leetcode.com/problems/maximum-width-of-binary-tree/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, return the maximum width of the given tree.
 *
 * The maximum width of a tree is the maximum width among all levels.
 *
 * The width of one level is defined as the length between the end-nodes (the leftmost and
 * rightmost non-null nodes), where the null nodes between the end-nodes that would be present
 * in a complete binary tree extending down to that level are also counted into the length
 * calculation.
 *
 * It is guaranteed that the answer will in the range of a 32-bit signed integer.
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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
  const queue = [[root, 0n]];
  let result = 0n;

  while (queue.length) {
    const total = queue.length;
    const levelStart = queue[0][1];
    let levelEnd;

    for (let i = 0; i < total; i++) {
      const [node, index] = queue.shift();
      levelEnd = index;
      if (node.left) queue.push([node.left, index * 2n]);
      if (node.right) queue.push([node.right, index * 2n + 1n]);
    }

    result = result > (levelEnd - levelStart + 1n)
      ? result
      : (levelEnd - levelStart + 1n);
  }

  return Number(result);
};
