/**
 * 1514. Path with Maximum Probability
 * https://leetcode.com/problems/path-with-maximum-probability/
 * Difficulty: Medium
 *
 * You are given an undirected weighted graph of n nodes (0-indexed), represented by an edge list
 * where edges[i] = [a, b] is an undirected edge connecting the nodes a and b with a probability
 * of success of traversing that edge succProb[i].
 *
 * Given two nodes start and end, find the path with the maximum probability of success to go from
 * start to end and return its success probability.
 *
 * If there is no path from start to end, return 0. Your answer will be accepted if it differs from
 * the correct answer by at most 1e-5.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} startNode
 * @param {number} endNode
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, startNode, endNode) {
  const maxProbs = new Array(n).fill(0);
  maxProbs[startNode] = 1;

  const graph = Array.from({ length: n }, () => []);
  edges.forEach(([a, b], i) => {
    graph[a].push([b, succProb[i]]);
    graph[b].push([a, succProb[i]]);
  });

  const queue = [startNode];
  while (queue.length) {
    const current = queue.shift();
    for (const [next, prob] of graph[current]) {
      const newProb = maxProbs[current] * prob;
      if (newProb > maxProbs[next]) {
        maxProbs[next] = newProb;
        queue.push(next);
      }
    }
  }

  return maxProbs[endNode];
};
