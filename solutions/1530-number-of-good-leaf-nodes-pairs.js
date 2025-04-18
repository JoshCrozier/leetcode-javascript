/**
 * 1530. Number of Good Leaf Nodes Pairs
 * https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/
 * Difficulty: Medium
 *
 * You are given the root of a binary tree and an integer distance. A pair of two different leaf
 * nodes of a binary tree is said to be good if the length of the shortest path between them is
 * less than or equal to distance.
 *
 * Return the number of good leaf node pairs in the tree.
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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
  let result = 0;
  traverseTree(root);
  return result;

  function traverseTree(node) {
    if (!node) return [];
    if (!node.left && !node.right) return [1];

    const leftDistances = traverseTree(node.left);
    const rightDistances = traverseTree(node.right);

    for (const left of leftDistances) {
      for (const right of rightDistances) {
        if (left + right <= distance) result++;
      }
    }

    const allDistances = [];
    for (const dist of leftDistances.concat(rightDistances)) {
      if (dist + 1 <= distance) allDistances.push(dist + 1);
    }

    return allDistances;
  }
};
