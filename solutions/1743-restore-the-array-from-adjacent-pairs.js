/**
 * 1743. Restore the Array From Adjacent Pairs
 * https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/
 * Difficulty: Medium
 *
 * There is an integer array nums that consists of n unique elements, but you have
 * forgotten it. However, you do remember every pair of adjacent elements in nums.
 *
 * You are given a 2D integer array adjacentPairs of size n - 1 where each
 * adjacentPairs[i] = [ui, vi] indicates that the elements ui and vi are adjacent in nums.
 *
 * It is guaranteed that every adjacent pair of elements nums[i] and nums[i+1] will exist in
 * adjacentPairs, either as [nums[i], nums[i+1]] or [nums[i+1], nums[i]]. The pairs can appear
 * in any order.
 *
 * Return the original array nums. If there are multiple solutions, return any of them.
 */

/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
  const graph = new Map();
  for (const [u, v] of adjacentPairs) {
    graph.set(u, (graph.get(u) || []).concat(v));
    graph.set(v, (graph.get(v) || []).concat(u));
  }

  let start;
  for (const [node, neighbors] of graph) {
    if (neighbors.length === 1) {
      start = node;
      break;
    }
  }

  const result = [start];
  let prev = start;
  let curr = graph.get(start)[0];

  while (graph.get(curr).length > 1) {
    result.push(curr);
    const next = graph.get(curr).find(n => n !== prev);
    prev = curr;
    curr = next;
  }
  result.push(curr);

  return result;
};
