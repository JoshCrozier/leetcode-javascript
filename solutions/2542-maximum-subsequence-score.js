/**
 * 2542. Maximum Subsequence Score
 * https://leetcode.com/problems/maximum-subsequence-score/
 * Difficulty: Medium
 *
 * You are given two 0-indexed integer arrays nums1 and nums2 of equal length n and a positive
 * integer k. You must choose a subsequence of indices from nums1 of length k.
 *
 * For chosen indices i0, i1, ..., ik - 1, your score is defined as:
 * - The sum of the selected elements from nums1 multiplied with the minimum of the selected
 *   elements from nums2.
 * - It can defined simply as: (nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2[i0],
 *   nums2[i1], ... ,nums2[ik - 1]).
 *
 * Return the maximum possible score.
 *
 * A subsequence of indices of an array is a set that can be derived from the set {0, 1, ..., n-1}
 * by deleting some or no elements.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
  const zipped = nums1.map((num1, i) => [num1, nums2[i]]).sort((a, b) => b[1] - a[1]);
  const heap = new MinPriorityQueue();
  let result = 0;
  let sum = 0;

  for (const [num, min] of zipped) {
    heap.enqueue(num);
    sum += num;

    if (heap.size() == k) {
      result = Math.max(result, sum * min);
      sum -= heap.dequeue().element;
    }
  }

  return result;
};
