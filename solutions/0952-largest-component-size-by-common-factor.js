/**
 * 952. Largest Component Size by Common Factor
 * https://leetcode.com/problems/largest-component-size-by-common-factor/
 * Difficulty: Hard
 *
 * You are given an integer array of unique positive integers nums. Consider the following graph:
 * - There are nums.length nodes, labeled nums[0] to nums[nums.length - 1],
 * - There is an undirected edge between nums[i] and nums[j] if nums[i] and nums[j] share a common
 *   factor greater than 1.
 *
 * Return the size of the largest connected component in the graph.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestComponentSize = function(nums) {
  const max = Math.max(...nums);
  const parent = new Array(max + 1).fill().map((_, i) => i);
  const rank = new Array(max + 1).fill(0);

  for (const num of nums) {
    for (let factor = 2; factor * factor <= num; factor++) {
      if (num % factor === 0) {
        union(parent, rank, num, factor);
        union(parent, rank, num, num / factor);
      }
    }
  }

  const map = new Map();
  let result = 0;

  for (const num of nums) {
    const root = find(parent, num);
    map.set(root, (map.get(root) || 0) + 1);
    result = Math.max(result, map.get(root));
  }

  return result;

  function find(parent, x) {
    if (parent[x] !== x) {
      parent[x] = find(parent, parent[x]);
    }
    return parent[x];
  }

  function union(parent, rank, x, y) {
    const rootX = find(parent, x);
    const rootY = find(parent, y);
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
