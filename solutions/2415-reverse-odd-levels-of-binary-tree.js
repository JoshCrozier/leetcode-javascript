/**
 * 2415. Reverse Odd Levels of Binary Tree
 * https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/
 * Difficulty: Medium
 *
 * Given the root of a perfect binary tree, reverse the node values at each odd level of the tree.
 * - For example, suppose the node values at level 3 are [2,1,3,4,7,11,29,18], then it should
 *   become [18,29,11,7,4,3,1,2].
 *
 * Return the root of the reversed tree.
 *
 * A binary tree is perfect if all parent nodes have two children and all leaves are on the same
 * level.
 *
 * The level of a node is the number of edges along the path between it and the root node.
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
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
  reverseLevel([root], 0);
  return root;

  function reverseLevel(nodes, level) {
    if (!nodes.length) return;

    if (level % 2 === 1) {
      for (let i = 0, j = nodes.length - 1; i < j; i++, j--) {
        [nodes[i].val, nodes[j].val] = [nodes[j].val, nodes[i].val];
      }
    }

    const nextLevel = [];
    for (const node of nodes) {
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }

    reverseLevel(nextLevel, level + 1);
  }
};
