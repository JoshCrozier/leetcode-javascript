/**
 * 444. Sequence Reconstruction
 * https://leetcode.com/problems/sequence-reconstruction/
 * Difficulty: Medium
 *
 * You are given an integer array nums of length n where nums is a permutation of the
 * integers in the range [1, n]. You are also given a 2D integer array sequences where
 * sequences[i] is a subsequence of nums.
 *
 * Check if nums is the shortest possible and the only supersequence. The shortest
 * supersequence is a sequence with the shortest length and has all sequences[i] as
 * subsequences. There could be multiple valid supersequences for the given array sequences.
 * - For example, for sequences = [[1,2],[1,3]], there are two shortest supersequences,
 *   [1,2,3] and [1,3,2].
 * - While for sequences = [[1,2],[1,3],[1,2,3]], the only shortest supersequence possible
 *   is [1,2,3]. [1,2,3,4] is a possible supersequence but not the shortest.
 *
 * Return true if nums is the only shortest supersequence for sequences, or false otherwise.
 *
 * A subsequence is a sequence that can be derived from another sequence by deleting some or
 * no elements without changing the order of the remaining elements.
 */

/**
 * @param {number[]} nums
 * @param {number[][]} sequences
 * @return {boolean}
 */
var sequenceReconstruction = function(nums, sequences) {
  const n = nums.length;
  const graph = new Map();
  const inDegree = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    graph.set(i, []);
  }

  for (const seq of sequences) {
    for (let i = 1; i < seq.length; i++) {
      graph.get(seq[i - 1]).push(seq[i]);
      inDegree[seq[i]]++;
    }
  }

  const queue = [];
  for (let i = 1; i <= n; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  if (queue.length !== 1) return false;

  const result = [];
  while (queue.length) {
    if (queue.length > 1) return false;
    const curr = queue.shift();
    result.push(curr);

    const nextNodes = graph.get(curr);
    for (const next of nextNodes) {
      inDegree[next]--;
      if (inDegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  return result.length === n && result.every((val, i) => val === nums[i]);
};
