/**
 * 987. Vertical Order Traversal of a Binary Tree
 * https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
 * Difficulty: Hard
 *
 * Given the root of a binary tree, calculate the vertical order traversal of the binary tree.
 *
 * For each node at position (row, col), its left and right children will be at positions
 * (row + 1, col - 1) and (row + 1, col + 1) respectively. The root of the tree is at (0, 0).
 *
 * The vertical order traversal of a binary tree is a list of top-to-bottom orderings for each
 * column index starting from the leftmost column and ending on the rightmost column. There may
 * be multiple nodes in the same row and same column. In such a case, sort these nodes by their
 * values.
 *
 * Return the vertical order traversal of the binary tree.
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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
  const nodes = [];

  function traverse(node, row, col) {
    if (!node) return;
    nodes.push([col, row, node.val]);
    traverse(node.left, row + 1, col - 1);
    traverse(node.right, row + 1, col + 1);
  }

  traverse(root, 0, 0);
  nodes.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);

  const result = [];
  let currentCol = nodes[0][0];
  let currentGroup = [];

  for (const [col, _, val] of nodes) {
    if (col !== currentCol) {
      result.push(currentGroup);
      currentGroup = [val];
      currentCol = col;
    } else {
      currentGroup.push(val);
    }
  }

  result.push(currentGroup);
  return result;
};
