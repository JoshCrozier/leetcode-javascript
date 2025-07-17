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
  const minHeap = new PriorityQueue((a, b) => a[0] - b[0]);
  const result = [];
  const visited = new Set();

  minHeap.enqueue([nums1[0] + nums2[0], 0, 0]);
  visited.add('0,0');

  for (let count = 0; count < k && !minHeap.isEmpty(); count++) {
    const [currentSum, index1, index2] = minHeap.dequeue();
    result.push([nums1[index1], nums2[index2]]);

    if (index1 + 1 < nums1.length && !visited.has(`${index1 + 1},${index2}`)) {
      minHeap.enqueue([nums1[index1 + 1] + nums2[index2], index1 + 1, index2]);
      visited.add(`${index1 + 1},${index2}`);
    }

    if (index2 + 1 < nums2.length && !visited.has(`${index1},${index2 + 1}`)) {
      minHeap.enqueue([nums1[index1] + nums2[index2 + 1], index1, index2 + 1]);
      visited.add(`${index1},${index2 + 1}`);
    }
  }

  return result;
};
