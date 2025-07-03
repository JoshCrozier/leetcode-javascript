/**
 * 1490. Clone N-ary Tree
 * https://leetcode.com/problems/clone-n-ary-tree/
 * Difficulty: Medium
 *
 * Given a root of an N-ary tree, return a deep copy (clone) of the tree.
 *
 * Each node in the n-ary tree contains a val (int) and a list (List[Node]) of its children.
 *
 * class Node {
 *     public int val;
 *     public List<Node> children;
 * }
 *
 * Nary-Tree input serialization is represented in their level order traversal, each group
 * of children is separated by the null value (See examples).
 */

/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {_Node|null} node
 * @return {_Node|null}
 */
var cloneTree = function(root) {
  if (!root) return null;

  const clonedNode = new _Node(root.val);
  clonedNode.children = root.children.map(child => cloneTree(child));

  return clonedNode;
};
