/**
 * 547. Number of Provinces
 * https://leetcode.com/problems/number-of-provinces/
 * Difficulty: Medium
 *
 * There are n cities. Some of them are connected, while some are not. If city a is connected
 * directly with city b, and city b is connected directly with city c, then city a is connected
 * indirectly with city c.
 *
 * A province is a group of directly or indirectly connected cities and no other cities outside
 * of the group.
 *
 * You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the
 * jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.
 */

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  const seen = new Array(isConnected.length).fill(0);
  let result = 0;

  function dfs(node) {
    seen[node] = 1;
    for (let i = 0; i < isConnected.length; i++) {
      if (isConnected[node][i] === 1 && !seen[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < isConnected.length; i++) {
    if (!seen[i]) {
      result++;
      dfs(i);
    }
  }

  return result;
};
