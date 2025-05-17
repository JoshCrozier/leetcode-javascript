/**
 * 2246. Longest Path With Different Adjacent Characters
 * https://leetcode.com/problems/longest-path-with-different-adjacent-characters/
 * Difficulty: Hard
 *
 * You are given a tree (i.e. a connected, undirected graph that has no cycles) rooted at node
 * 0 consisting of n nodes numbered from 0 to n - 1. The tree is represented by a 0-indexed array
 * parent of size n, where parent[i] is the parent of node i. Since node 0 is the root,
 * parent[0] == -1.
 *
 * You are also given a string s of length n, where s[i] is the character assigned to node i.
 *
 * Return the length of the longest path in the tree such that no pair of adjacent nodes on the path
 * have the same character assigned to them.
 */

/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function(parent, s) {
  const n = parent.length;
  const children = Array.from({ length: n }, () => []);
  let result = 1;

  for (let i = 1; i < n; i++) {
    children[parent[i]].push(i);
  }

  findLongest(0);

  return result;

  function findLongest(node) {
    let longest = 0;
    let secondLongest = 0;

    for (const child of children[node]) {
      const length = findLongest(child);
      if (s[child] !== s[node]) {
        if (length > longest) {
          secondLongest = longest;
          longest = length;
        } else if (length > secondLongest) {
          secondLongest = length;
        }
      }
    }

    result = Math.max(result, longest + secondLongest + 1);
    return longest + 1;
  }
};
