/**
 * 2407. Longest Increasing Subsequence II
 * https://leetcode.com/problems/longest-increasing-subsequence-ii/
 * Difficulty: Hard
 *
 * You are given an integer array nums and an integer k.
 *
 * Find the longest subsequence of nums that meets the following requirements:
 * - The subsequence is strictly increasing and
 * - The difference between adjacent elements in the subsequence is at most k.
 *
 * Return the length of the longest subsequence that meets the requirements.
 *
 * A subsequence is an array that can be derived from another array by deleting some or
 * no elements without changing the order of the remaining elements.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var lengthOfLIS = function(nums, k) {
  const maxValue = Math.max(...nums);
  const tree = new Array(4 * maxValue).fill(0);

  for (const currentNum of nums) {
    const rangeStart = Math.max(1, currentNum - k);
    const rangeEnd = currentNum - 1;

    const bestPreviousLength = rangeEnd >= rangeStart
      ? queryRange(1, 1, maxValue, rangeStart, rangeEnd) : 0;
    updatePosition(1, 1, maxValue, currentNum, bestPreviousLength + 1);
  }

  return queryRange(1, 1, maxValue, 1, maxValue);

  function updatePosition(nodeIndex, treeStart, treeEnd, position, newLength) {
    if (treeStart === treeEnd) {
      tree[nodeIndex] = Math.max(tree[nodeIndex], newLength);
    } else {
      const treeMid = Math.floor((treeStart + treeEnd) / 2);
      if (position <= treeMid) {
        updatePosition(2 * nodeIndex, treeStart, treeMid, position, newLength);
      } else {
        updatePosition(2 * nodeIndex + 1, treeMid + 1, treeEnd, position, newLength);
      }
      tree[nodeIndex] = Math.max(tree[2 * nodeIndex], tree[2 * nodeIndex + 1]);
    }
  }

  function queryRange(nodeIndex, treeStart, treeEnd, queryStart, queryEnd) {
    if (queryEnd < treeStart || treeEnd < queryStart) {
      return 0;
    }
    if (queryStart <= treeStart && treeEnd <= queryEnd) {
      return tree[nodeIndex];
    }
    const mid = Math.floor((treeStart + treeEnd) / 2);
    return Math.max(
      queryRange(2 * nodeIndex, treeStart, mid, queryStart, queryEnd),
      queryRange(2 * nodeIndex + 1, mid + 1, treeEnd, queryStart, queryEnd)
    );
  }
};
