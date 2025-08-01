/**
 * 2333. Minimum Sum of Squared Difference
 * https://leetcode.com/problems/minimum-sum-of-squared-difference/
 * Difficulty: Medium
 *
 * You are given two positive 0-indexed integer arrays nums1 and nums2, both of length n.
 *
 * The sum of squared difference of arrays nums1 and nums2 is defined as the sum of
 * (nums1[i] - nums2[i])2 for each 0 <= i < n.
 *
 * You are also given two positive integers k1 and k2. You can modify any of the elements
 * of nums1 by +1 or -1 at most k1 times. Similarly, you can modify any of the elements
 * of nums2 by +1 or -1 at most k2 times.
 *
 * Return the minimum sum of squared difference after modifying array nums1 at most k1
 * times and modifying array nums2 at most k2 times.
 *
 * Note: You are allowed to modify the array elements to become negative integers.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
var minSumSquareDiff = function(nums1, nums2, k1, k2) {
  const n = nums1.length;
  const frequencyMap = new Map();

  for (let i = 0; i < n; i++) {
    const diff = Math.abs(nums1[i] - nums2[i]);
    frequencyMap.set(diff, (frequencyMap.get(diff) || 0) + 1);
  }

  let totalMoves = k1 + k2;
  const maxHeap = new PriorityQueue((a, b) => b[0] - a[0]);

  for (const [value, count] of frequencyMap) {
    if (value === 0) continue;
    maxHeap.enqueue([value, count]);
  }

  while (!maxHeap.isEmpty() && totalMoves > 0) {
    const [value, count] = maxHeap.dequeue();

    if (maxHeap.isEmpty()) {
      const moves = Math.min(totalMoves, count);
      totalMoves -= moves;
      const remainingCount = count - moves;

      if (value - 1 > 0) {
        maxHeap.enqueue([value - 1, moves]);
      }
      if (remainingCount > 0) {
        maxHeap.enqueue([value, remainingCount]);
      }
    } else {
      const moves = Math.min(totalMoves, count);
      totalMoves -= moves;
      const remainingCount = count - moves;

      if (remainingCount > 0) {
        maxHeap.enqueue([value, remainingCount]);
      }

      if (!maxHeap.isEmpty() && maxHeap.front()[0] === value - 1) {
        const [nextValue, nextCount] = maxHeap.dequeue();
        maxHeap.enqueue([nextValue, nextCount + moves]);
      } else if (value - 1 > 0) {
        maxHeap.enqueue([value - 1, moves]);
      }
    }
  }

  let result = 0;
  while (!maxHeap.isEmpty()) {
    const [value, count] = maxHeap.dequeue();
    result += value * value * count;
  }

  return result;
};
