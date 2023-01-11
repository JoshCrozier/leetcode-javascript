/**
 * 1443. Minimum Time to Collect All Apples in a Tree
 * https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/
 * Difficulty: Medium
 *
 * Given an undirected tree consisting of n vertices numbered from 0 to n-1, which has some apples
 * in their vertices. You spend 1 second to walk over one edge of the tree. Return the minimum time
 * in seconds you have to spend to collect all apples in the tree, starting at vertex 0 and coming
 * back to this vertex.
 *
 * The edges of the undirected tree are given in the array edges, where edges[i] = [ai, bi] means
 * that exists an edge connecting the vertices ai and bi. Additionally, there is a boolean array
 * hasApple, where hasApple[i] = true means that vertex i has an apple; otherwise, it does not
 * have any apple.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
  const map = new Map();
  const seen = new Set();
  let time = 0;

  edges.forEach(([value, key]) => map.set(key, value));
  for (let i = n - 1; i >= 0; i--) {
    if (hasApple[i]) {
      dfs(i);
    }
  }

  function dfs(key) {
    if (key === 0 || seen.has(key)) return;
    seen.add(key);
    time += 2;
    dfs(map.get(key));
  }

  return time;
};
