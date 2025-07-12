/**
 * 2519. Count the Number of K-Big Indices
 * https://leetcode.com/problems/count-the-number-of-k-big-indices/
 * Difficulty: Hard
 *
 * You are given a 0-indexed integer array nums and a positive integer k.
 *
 * We call an index i k-big if the following conditions are satisfied:
 * - There exist at least k different indices idx1 such that idx1 < i and nums[idx1] < nums[i].
 * - There exist at least k different indices idx2 such that idx2 > i and nums[idx2] < nums[i].
 *
 * Return the number of k-big indices.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var kBigIndices = function(nums, k) {
  const n = nums.length;
  const hasKSmallerLeft = new Array(n).fill(false);

  const leftMaxHeap = new PriorityQueue((a, b) => b - a);
  for (let i = 0; i < n; i++) {
    if (leftMaxHeap.size() === k && leftMaxHeap.front() < nums[i]) {
      hasKSmallerLeft[i] = true;
    }
    leftMaxHeap.enqueue(nums[i]);
    if (leftMaxHeap.size() > k) {
      leftMaxHeap.dequeue();
    }
  }

  let result = 0;
  const rightMaxHeap = new PriorityQueue((a, b) => b - a);
  for (let i = n - 1; i >= 0; i--) {
    if (rightMaxHeap.size() === k && rightMaxHeap.front() < nums[i] && hasKSmallerLeft[i]) {
      result++;
    }
    rightMaxHeap.enqueue(nums[i]);
    if (rightMaxHeap.size() > k) {
      rightMaxHeap.dequeue();
    }
  }

  return result;
};
