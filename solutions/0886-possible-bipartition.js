/**
 * 886. Possible Bipartition
 * https://leetcode.com/problems/possible-bipartition/
 * Difficulty: Medium
 *
 * We want to split a group of n people (labeled from 1 to n) into two groups of any size.
 * Each person may dislike some other people, and they should not go into the same group.
 *
 * Given the integer n and the array dislikes where dislikes[i] = [ai, bi] indicates that
 * the person labeled ai does not like the person labeled bi, return true if it is possible
 * to split everyone into two groups in this way.
 */

/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
  const graph = Array.from({ length: n + 1 }, () => []);
  dislikes.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  const colors = new Array(n + 1).fill(0);

  function colorGraph(person, color) {
    colors[person] = color;
    for (const neighbor of graph[person]) {
      if (colors[neighbor] === color) return false;
      if (colors[neighbor] === 0 && !colorGraph(neighbor, -color)) return false;
    }
    return true;
  }

  for (let person = 1; person <= n; person++) {
    if (colors[person] === 0 && !colorGraph(person, 1)) return false;
  }

  return true;
};
