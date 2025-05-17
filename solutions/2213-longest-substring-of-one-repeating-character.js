/**
 * 2213. Longest Substring of One Repeating Character
 * https://leetcode.com/problems/longest-substring-of-one-repeating-character/
 * Difficulty: Hard
 *
 * You are given a 0-indexed string s. You are also given a 0-indexed string queryCharacters of
 * length k and a 0-indexed array of integer indices queryIndices of length k, both of which are
 * used to describe k queries.
 *
 * The ith query updates the character in s at index queryIndices[i] to the character
 * queryCharacters[i].
 *
 * Return an array lengths of length k where lengths[i] is the length of the longest substring of
 * s consisting of only one repeating character after the ith query is performed.
 */

/**
* @param {string} s
* @param {string} queryCharacters
* @param {number[]} queryIndices
* @return {number[]}
*/
var longestRepeating = function(s, queryCharacters, queryIndices) {
  const chars = s.split('');
  const n = chars.length;
  const k = queryIndices.length;
  const result = [];

  class Node {
    constructor() {
      this.left = 0;
      this.right = 0;
      this.max = 0;
      this.total = 0;
    }
  }

  const tree = new Array(4 * n);
  for (let i = 0; i < 4 * n; i++) {
    tree[i] = new Node();
  }

  function buildTree(node, start, end) {
    if (start === end) {
      tree[node].left = 1;
      tree[node].right = 1;
      tree[node].max = 1;
      tree[node].total = 1;
      return;
    }

    const mid = Math.floor((start + end) / 2);
    buildTree(2 * node, start, mid);
    buildTree(2 * node + 1, mid + 1, end);

    updateNode(node, start, end);
  }

  function updateNode(node, start, end) {
    const leftChild = 2 * node;
    const rightChild = 2 * node + 1;
    const mid = Math.floor((start + end) / 2);

    tree[node].total = tree[leftChild].total + tree[rightChild].total;

    if (tree[leftChild].total === tree[leftChild].left
        && mid + 1 <= end && chars[mid] === chars[mid + 1]) {
      tree[node].left = tree[leftChild].total + tree[rightChild].left;
    } else {
      tree[node].left = tree[leftChild].left;
    }

    if (tree[rightChild].total === tree[rightChild].right
        && mid >= start && chars[mid] === chars[mid + 1]) {
      tree[node].right = tree[rightChild].total + tree[leftChild].right;
    } else {
      tree[node].right = tree[rightChild].right;
    }

    tree[node].max = Math.max(tree[leftChild].max, tree[rightChild].max);

    if (mid >= start && mid + 1 <= end && chars[mid] === chars[mid + 1]) {
      tree[node].max = Math.max(tree[node].max,
        tree[leftChild].right + tree[rightChild].left);
    }
  }

  function update(node, start, end, index) {
    if (index < start || index > end) {
      return;
    }

    if (start === end) {
      return;
    }

    const mid = Math.floor((start + end) / 2);
    update(2 * node, start, mid, index);
    update(2 * node + 1, mid + 1, end, index);

    updateNode(node, start, end);
  }

  buildTree(1, 0, n - 1);

  for (let q = 0; q < k; q++) {
    const index = queryIndices[q];
    const newChar = queryCharacters[q];

    chars[index] = newChar;
    update(1, 0, n - 1, index);

    result.push(tree[1].max);
  }

  return result;
};
