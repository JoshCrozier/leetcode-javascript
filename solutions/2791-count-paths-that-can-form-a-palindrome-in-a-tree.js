/**
 * 2791. Count Paths That Can Form a Palindrome in a Tree
 * https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/
 * Difficulty: Hard
 *
 * You are given a tree (i.e. a connected, undirected graph that has no cycles) rooted at node
 * 0 consisting of n nodes numbered from 0 to n - 1. The tree is represented by a 0-indexed
 * array parent of size n, where parent[i] is the parent of node i. Since node 0 is the root,
 * parent[0] == -1.
 *
 * You are also given a string s of length n, where s[i] is the character assigned to the edge
 * between i and parent[i]. s[0] can be ignored.
 *
 * Return the number of pairs of nodes (u, v) such that u < v and the characters assigned to edges
 * on the path from u to v can be rearranged to form a palindrome.
 *
 * A string is a palindrome when it reads the same backwards as forwards.
 */

/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var countPalindromePaths = function(parent, s) {
  const n = parent.length;
  const graph = Array.from({ length: n }, () => []);
  for (let i = 1; i < n; i++) {
    graph[parent[i]].push(i);
  }

  const freq = new Map([[0, 1]]);
  let result = 0;

  dfs(0, 0);
  return result;

  function dfs(node, mask) {
    for (const child of graph[node]) {
      const newMask = mask ^ (1 << (s[child].charCodeAt(0) - 97));
      result += freq.get(newMask) || 0;
      for (let i = 0; i < 26; i++) {
        result += freq.get(newMask ^ (1 << i)) || 0;
      }
      freq.set(newMask, (freq.get(newMask) || 0) + 1);
      dfs(child, newMask);
    }
  }
};
