/**
 * 1202. Smallest String With Swaps
 * https://leetcode.com/problems/smallest-string-with-swaps/
 * Difficulty: Medium
 *
 * You are given a string s, and an array of pairs of indices in the string pairs where
 * pairs[i] = [a, b] indicates 2 indices(0-indexed) of the string.
 *
 * You can swap the characters at any pair of indices in the given pairs any number of times.
 *
 * Return the lexicographically smallest string that s can be changed to after using the swaps.
 */

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
  const parent = Array.from({ length: s.length }, (_, i) => i);
  const rank = new Array(s.length).fill(0);

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  pairs.forEach(([x, y]) => union(x, y));

  const components = new Map();
  for (let i = 0; i < s.length; i++) {
    const root = find(i);
    if (!components.has(root)) {
      components.set(root, { indices: [], chars: [] });
    }
    components.get(root).indices.push(i);
    components.get(root).chars.push(s[i]);
  }

  const result = new Array(s.length);
  for (const { indices, chars } of components.values()) {
    chars.sort((a, b) => b.localeCompare(a));
    indices.sort((a, b) => a - b);
    indices.forEach((idx, i) => result[idx] = chars.pop());
  }

  return result.join('');

  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX !== rootY) {
      if (rank[rootX] < rank[rootY]) {
        parent[rootX] = rootY;
      } else if (rank[rootX] > rank[rootY]) {
        parent[rootY] = rootX;
      } else {
        parent[rootY] = rootX;
        rank[rootX]++;
      }
    }
  }
};
