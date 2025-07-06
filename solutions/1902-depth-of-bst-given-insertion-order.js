/**
 * 1902. Depth of BST Given Insertion Order
 * https://leetcode.com/problems/depth-of-bst-given-insertion-order/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array order of length n, a permutation of integers
 * from 1 to n representing the order of insertion into a binary search tree.
 *
 * A binary search tree is defined as follows:
 * - The left subtree of a node contains only nodes with keys less than the node's key.
 * - The right subtree of a node contains only nodes with keys greater than the node's key.
 * - Both the left and right subtrees must also be binary search trees.
 *
 * The binary search tree is constructed as follows:
 * - order[0] will be the root of the binary search tree.
 * - All subsequent elements are inserted as the child of any existing node such that the
 *   binary search tree properties hold.
 *
 * Return the depth of the binary search tree.
 *
 * A binary tree's depth is the number of nodes along the longest path from the root node
 * down to the farthest leaf node.
 */

/**
 * @param {number[]} order
 * @return {number}
 */
var maxDepthBST = function(order) {
  const n = order.length;
  const parents = new Array(n + 1).fill(0);
  const insertOrders = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    insertOrders[order[i]] = i + 1;
  }

  const stack = [];

  for (let node = 0; node <= n; node++) {
    const insertOrder = insertOrders[node];

    while (stack.length > 0 && insertOrders[stack[stack.length - 1]] > insertOrder) {
      const prevNode = stack.pop();
      if (insertOrders[parents[prevNode]] < insertOrder) {
        parents[prevNode] = node;
      }
    }

    if (stack.length > 0) {
      parents[node] = stack[stack.length - 1];
    }

    stack.push(node);
  }

  const depths = new Array(n + 1).fill(0);
  for (const num of order) {
    depths[num] = depths[parents[num]] + 1;
  }

  return Math.max(...depths);
};
