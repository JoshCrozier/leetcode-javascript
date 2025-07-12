/**
 * 2479. Maximum XOR of Two Non-Overlapping Subtrees
 * https://leetcode.com/problems/maximum-xor-of-two-non-overlapping-subtrees/
 * Difficulty: Hard
 *
 * There is an undirected tree with n nodes labeled from 0 to n - 1. You are given the integer
 * n and a 2D integer array edges of length n - 1, where edges[i] = [ai, bi] indicates that
 * there is an edge between nodes ai and bi in the tree. The root of the tree is the node labeled 0.
 *
 * Each node has an associated value. You are given an array values of length n, where values[i]
 * is the value of the ith node.
 *
 * Select any two non-overlapping subtrees. Your score is the bitwise XOR of the sum of the
 * values within those subtrees.
 *
 * Return the maximum possible score you can achieve. If it is impossible to find two
 * nonoverlapping subtrees, return 0.
 *
 * Note that:
 * - The subtree of a node is the tree consisting of that node and all of its descendants.
 * - Two subtrees are non-overlapping if they do not share any common node.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @return {number}
 */
var maxXor = function(n, edges, values) {
  class TrieNode {
    constructor() {
      this.children = [null, null];
    }
  }

  const graph = Array(n).fill().map(() => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const subtreeSums = new Array(n);

  calculateSubtreeSum(0, -1);
  const root = new TrieNode();

  return Number(findMaxXor(0, -1, root));

  function calculateSubtreeSum(node, parent) {
    subtreeSums[node] = BigInt(values[node]);
    for (const child of graph[node]) {
      if (child !== parent) {
        subtreeSums[node] += calculateSubtreeSum(child, node);
      }
    }
    return subtreeSums[node];
  }

  function insert(root, value) {
    let current = root;
    for (let bit = 44; bit >= 0; bit--) {
      const bitValue = (value >> BigInt(bit)) & 1n;
      const index = Number(bitValue);
      if (!current.children[index]) {
        current.children[index] = new TrieNode();
      }
      current = current.children[index];
    }
  }

  function getMaxValue(root, currentValue) {
    if (!root.children[0] && !root.children[1]) {
      return 0n;
    }

    let result = 0n;
    let current = root;

    for (let bit = 44; bit >= 0; bit--) {
      const currentBit = (currentValue >> BigInt(bit)) & 1n;
      const wantedBit = 1n - currentBit;
      const wantedIndex = Number(wantedBit);
      const currentIndex = Number(currentBit);

      if (current.children[wantedIndex]) {
        result += 1n << BigInt(bit);
        current = current.children[wantedIndex];
      } else {
        current = current.children[currentIndex];
      }
    }

    return result;
  }

  function findMaxXor(node, parent, root) {
    let result = getMaxValue(root, subtreeSums[node]);

    for (const child of graph[node]) {
      if (child !== parent) {
        const childResult = findMaxXor(child, node, root);
        if (childResult > result) {
          result = childResult;
        }
      }
    }

    insert(root, subtreeSums[node]);
    return result;
  }
};
