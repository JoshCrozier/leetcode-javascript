/**
 * 2374. Node With Highest Edge Score
 * https://leetcode.com/problems/node-with-highest-edge-score/
 * Difficulty: Medium
 *
 * You are given a directed graph with n nodes labeled from 0 to n - 1, where each node has
 * exactly one outgoing edge.
 *
 * The graph is represented by a given 0-indexed integer array edges of length n, where edges[i]
 * indicates that there is a directed edge from node i to node edges[i].
 *
 * The edge score of a node i is defined as the sum of the labels of all the nodes that have an
 * edge pointing to i.
 *
 * Return the node with the highest edge score. If multiple nodes have the same edge score, return
 * the node with the smallest index.
 */

/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function(edges) {
  const scores = new Array(edges.length).fill(0);

  for (let i = 0; i < edges.length; i++) {
    scores[edges[i]] += i;
  }
  let maxScore = 0;
  let result = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > maxScore) {
      maxScore = scores[i];
      result = i;
    }
  }

  return result;
};
