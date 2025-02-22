/**
 * 1028. Recover a Tree From Preorder Traversal
 * https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/
 * Difficulty: Hard
 *
 * We run a preorder depth-first search (DFS) on the root of a binary tree.
 *
 * At each node in this traversal, we output D dashes (where D is the depth of this node),
 * then we output the value of this node.  If the depth of a node is D, the depth of its
 * immediate child is D + 1.  The depth of the root node is 0.
 *
 * If a node has only one child, that child is guaranteed to be the left child.
 *
 * Given the output traversal of this traversal, recover the tree and return its root.
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
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function(traversal) {
  const stack = [];

  for (let i = 0; i < traversal.length;) {
    let depth = 0;
    while (traversal[i] === '-') {
      depth++;
      i++;
    }

    let value = 0;
    while (i < traversal.length && traversal[i] !== '-') {
      value = value * 10 + parseInt(traversal[i]);
      i++;
    }

    const node = new TreeNode(value);
    while (stack.length > depth) stack.pop();
    if (stack.length) {
      if (!stack[stack.length - 1].left) stack[stack.length - 1].left = node;
      else stack[stack.length - 1].right = node;
    }
    stack.push(node);
  }

  return stack[0];
};
