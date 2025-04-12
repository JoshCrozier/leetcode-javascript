/**
 * 1361. Validate Binary Tree Nodes
 * https://leetcode.com/problems/validate-binary-tree-nodes/
 * Difficulty: Medium
 *
 * You have n binary tree nodes numbered from 0 to n - 1 where node i has two children
 * leftChild[i] and rightChild[i], return true if and only if all the given nodes form
 * exactly one valid binary tree.
 *
 * If node i has no left child then leftChild[i] will equal -1, similarly for the right child.
 *
 * Note that the nodes have no values and that we only use the node numbers in this problem.
 */

/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
  const parentCount = new Array(n).fill(0);
  let rootCandidate = -1;

  for (let i = 0; i < n; i++) {
    if (leftChild[i] !== -1) parentCount[leftChild[i]]++;
    if (rightChild[i] !== -1) parentCount[rightChild[i]]++;
  }

  for (let i = 0; i < n; i++) {
    if (parentCount[i] === 0) {
      if (rootCandidate !== -1) return false;
      rootCandidate = i;
    }
    if (parentCount[i] > 1) return false;
  }

  if (rootCandidate === -1) return false;

  return countNodes(rootCandidate, new Set()) === n;

  function countNodes(node, visited) {
    if (node === -1) return 0;
    if (visited.has(node)) return -1;
    visited.add(node);
    const leftNodes = countNodes(leftChild[node], visited);
    const rightNodes = countNodes(rightChild[node], visited);
    if (leftNodes === -1 || rightNodes === -1) return -1;
    return 1 + leftNodes + rightNodes;
  }
};
