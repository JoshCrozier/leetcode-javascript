/**
 * 2097. Valid Arrangement of Pairs
 * https://leetcode.com/problems/valid-arrangement-of-pairs/
 * Difficulty: Hard
 *
 * You are given a 0-indexed 2D integer array pairs where pairs[i] = [starti, endi]. An arrangement
 * of pairs is valid if for every index i where 1 <= i < pairs.length, we have endi-1 == starti.
 *
 * Return any valid arrangement of pairs.
 *
 * Note: The inputs will be generated such that there exists a valid arrangement of pairs.
 */

/**
 * @param {number[][]} pairs
 * @return {number[][]}
 */
var validArrangement = function(pairs) {
  const graph = new Map();
  const degree = new Map();

  for (const [start, end] of pairs) {
    if (!graph.has(start)) graph.set(start, []);
    graph.get(start).push(end);

    degree.set(start, (degree.get(start) || 0) + 1);
    degree.set(end, (degree.get(end) || 0) - 1);
  }

  let startNode = pairs[0][0];
  for (const [node, deg] of degree) {
    if (deg > 0) {
      startNode = node;
      break;
    }
  }

  const result = [];
  helper(startNode);

  return result.reverse();

  function helper(node) {
    while (graph.get(node)?.length) {
      const next = graph.get(node).pop();
      helper(next);
      result.push([node, next]);
    }
  }
};
