/**
 * 894. All Possible Full Binary Trees
 * https://leetcode.com/problems/all-possible-full-binary-trees/
 * Difficulty: Medium
 *
 * Given an integer n, return a list of all possible full binary trees with n nodes. Each node
 * of each tree in the answer must have Node.val == 0.
 *
 * Each element of the answer is the root node of one possible tree. You may return the final
 * list of trees in any order.
 *
 * A full binary tree is a binary tree where each node has exactly 0 or 2 children.
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
  const memo = new Map();
  return generateTrees(n);

  function generateTrees(nodes) {
    if (nodes % 2 === 0) return [];
    if (nodes === 1) return [new TreeNode(0)];
    if (memo.has(nodes)) return memo.get(nodes);

    const result = [];
    for (let leftNodes = 1; leftNodes < nodes - 1; leftNodes += 2) {
      const rightNodes = nodes - 1 - leftNodes;
      const leftTrees = generateTrees(leftNodes);
      const rightTrees = generateTrees(rightNodes);

      for (const left of leftTrees) {
        for (const right of rightTrees) {
          result.push(new TreeNode(0, left, right));
        }
      }
    }

    memo.set(nodes, result);
    return result;
  }
};
