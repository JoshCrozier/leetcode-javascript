/**
 * 2242. Maximum Score of a Node Sequence
 * https://leetcode.com/problems/maximum-score-of-a-node-sequence/
 * Difficulty: Hard
 *
 * There is an undirected graph with n nodes, numbered from 0 to n - 1.
 *
 * You are given a 0-indexed integer array scores of length n where scores[i] denotes the score
 * of node i. You are also given a 2D integer array edges where edges[i] = [ai, bi] denotes that
 * there exists an undirected edge connecting nodes ai and bi.
 *
 * A node sequence is valid if it meets the following conditions:
 * - There is an edge connecting every pair of adjacent nodes in the sequence.
 * - No node appears more than once in the sequence.
 *
 * The score of a node sequence is defined as the sum of the scores of the nodes in the sequence.
 *
 * Return the maximum score of a valid node sequence with a length of 4. If no such sequence exists,
 * return -1.
 */

/**
 * @param {number[]} scores
 * @param {number[][]} edges
 * @return {number}
 */
var maximumScore = function(scores, edges) {
  const n = scores.length;
  const graph = new Array(n).fill().map(() => []);

  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  for (let i = 0; i < n; i++) {
    graph[i].sort((a, b) => scores[b] - scores[a]);
    if (graph[i].length > 3) {
      graph[i] = graph[i].slice(0, 3);
    }
  }

  let result = -1;
  for (const [a, b] of edges) {
    for (const c of graph[a]) {
      if (c === b) continue;
      for (const d of graph[b]) {
        if (d === a || d === c) continue;
        result = Math.max(result, scores[a] + scores[b] + scores[c] + scores[d]);
      }
    }
  }

  return result;
};
