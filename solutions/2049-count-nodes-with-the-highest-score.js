/**
 * 2049. Count Nodes With the Highest Score
 * https://leetcode.com/problems/count-nodes-with-the-highest-score/
 * Difficulty: Medium
 *
 * There is a binary tree rooted at 0 consisting of n nodes. The nodes are labeled from 0 to n - 1.
 * You are given a 0-indexed integer array parents representing the tree, where parents[i] is the
 * parent of node i. Since node 0 is the root, parents[0] == -1.
 *
 * Each node has a score. To find the score of a node, consider if the node and the edges connected
 * to it were removed. The tree would become one or more non-empty subtrees. The size of a subtree
 * is the number of the nodes in it. The score of the node is the product of the sizes of all
 * those subtrees.
 *
 * Return the number of nodes that have the highest score.
 */

/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function(parents) {
  const n = parents.length;
  const children = Array.from({ length: n }, () => []);
  for (let i = 1; i < n; i++) {
    children[parents[i]].push(i);
  }

  const sizes = new Array(n).fill(0);
  let maxScore = 0n;
  let maxScoreCount = 0;

  calculateSize(0);

  return maxScoreCount;

  function calculateSize(node) {
    let leftSize = 0;
    let rightSize = 0;

    if (children[node].length > 0) leftSize = calculateSize(children[node][0]);
    if (children[node].length > 1) rightSize = calculateSize(children[node][1]);

    sizes[node] = leftSize + rightSize + 1;

    let score = 1n;
    if (leftSize > 0) score *= BigInt(leftSize);
    if (rightSize > 0) score *= BigInt(rightSize);
    const parentSize = n - sizes[node];
    if (parentSize > 0) score *= BigInt(parentSize);

    if (score > maxScore) {
      maxScore = score;
      maxScoreCount = 1;
    } else if (score === maxScore) {
      maxScoreCount++;
    }

    return sizes[node];
  }
};
