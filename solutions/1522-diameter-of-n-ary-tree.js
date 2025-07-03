/**
 * 1522. Diameter of N-Ary Tree
 * https://leetcode.com/problems/diameter-of-n-ary-tree/
 * Difficulty: Medium
 *
 * Given a root of an N-ary tree, you need to compute the length of the diameter of the tree.
 *
 * The diameter of an N-ary tree is the length of the longest path between any two nodes in
 * the tree. This path may or may not pass through the root.
 *
 * (Nary-Tree input serialization is represented in their level order traversal, each group
 * of children is separated by the null value.)
 */

/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {_Node} root
 * @return {number}
 */
var diameter = function(root) {
  let maxDiameter = 0;
  dfs(root);
  return maxDiameter;

  function dfs(node) {
    if (!node) return 0;

    const depths = node.children.map(child => dfs(child)).sort((a, b) => b - a);

    const currentDiameter = depths.length >= 2 ? depths[0] + depths[1] : depths[0] || 0;
    maxDiameter = Math.max(maxDiameter, currentDiameter);

    return (depths[0] || 0) + 1;
  }
};
