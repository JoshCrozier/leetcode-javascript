/**
 * 1803. Count Pairs With XOR in a Range
 * https://leetcode.com/problems/count-pairs-with-xor-in-a-range/
 * Difficulty: Hard
 *
 * Given a (0-indexed) integer array nums and two integers low and high, return the number
 * of nice pairs.
 *
 * A nice pair is a pair (i, j) where 0 <= i < j < nums.length and low <= (nums[i] XOR
 * nums[j]) <= high.
 */

/**
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countPairs = function(nums, low, high) {
  const root = new TrieNode();
  let total = 0;

  for (const num of nums) {
    total += countPairsInRange(num, high, root) - countPairsInRange(num, low - 1, root);
    insert(num, root);
  }

  return total;
};

class TrieNode {
  constructor() {
    this.children = [null, null];
    this.count = 0;
  }
}

function countPairsInRange(num, limit, root, depth = 14) {
  let count = 0;
  let node = root;
  for (let i = depth; i >= 0 && node; i--) {
    const numBit = (num >> i) & 1;
    const limitBit = (limit >> i) & 1;
    if (limitBit === 0) {
      node = node.children[numBit];
    } else {
      if (node.children[numBit]) {
        count += node.children[numBit].count;
      }
      node = node.children[numBit ^ 1];
    }
  }
  return count + (node ? node.count : 0);
}

function insert(num, root) {
  let node = root;
  for (let i = 14; i >= 0; i--) {
    const bit = (num >> i) & 1;
    if (!node.children[bit]) {
      node.children[bit] = new TrieNode();
    }
    node = node.children[bit];
    node.count++;
  }
}

