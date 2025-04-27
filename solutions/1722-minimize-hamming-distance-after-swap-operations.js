/**
 * 1722. Minimize Hamming Distance After Swap Operations
 * https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/
 * Difficulty: Medium
 *
 * You are given two integer arrays, source and target, both of length n. You are also given an
 * array allowedSwaps where each allowedSwaps[i] = [ai, bi] indicates that you are allowed to
 * swap the elements at index ai and index bi (0-indexed) of array source. Note that you can
 * swap elements at a specific pair of indices multiple times and in any order.
 *
 * The Hamming distance of two arrays of the same length, source and target, is the number of
 * positions where the elements are different. Formally, it is the number of indices i for
 * 0 <= i <= n-1 where source[i] != target[i] (0-indexed).
 *
 * Return the minimum Hamming distance of source and target after performing any amount of swap
 * operations on array source.
 */

/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
var minimumHammingDistance = function(source, target, allowedSwaps) {
  const n = source.length;
  const parent = new Array(n).fill().map((_, i) => i);

  for (const [a, b] of allowedSwaps) {
    union(a, b);
  }

  const groups = new Map();
  for (let i = 0; i < n; i++) {
    const root = find(i);
    if (!groups.has(root)) {
      groups.set(root, { source: [], target: [] });
    }
    groups.get(root).source.push(source[i]);
    groups.get(root).target.push(target[i]);
  }

  let result = 0;
  for (const { source, target } of groups.values()) {
    const sourceCount = new Map();
    for (const num of source) {
      sourceCount.set(num, (sourceCount.get(num) || 0) + 1);
    }
    for (const num of target) {
      const count = sourceCount.get(num) || 0;
      if (count === 0) {
        result++;
      } else {
        sourceCount.set(num, count - 1);
      }
    }
  }

  return result;

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(x, y) {
    parent[find(x)] = find(y);
  }
};
