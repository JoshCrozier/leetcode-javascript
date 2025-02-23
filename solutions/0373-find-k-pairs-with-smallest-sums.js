/**
 * 373. Find K Pairs with Smallest Sums
 * https://leetcode.com/problems/find-k-pairs-with-smallest-sums/
 * Difficulty: Medium
 *
 * You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.
 *
 * Define a pair (u, v) which consists of one element from the first array and one element from the
 * second array.
 *
 * Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  const heap = new MinPriorityQueue({ compare: (a, b) => a[0] - b[0] });
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    heap.enqueue([nums1[i] + nums2[0], 0]);
  }

  while (k > 0 && !heap.isEmpty()) {
    const [n, index] = heap.dequeue();
    result.push([n - nums2[index], nums2[index]]);
    if (index + 1 < nums2.length) {
      heap.enqueue([n - nums2[index] + nums2[index + 1], index + 1]);
    }
    k--;
  }

  return result;
};
