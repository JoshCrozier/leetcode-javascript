/**
 * 2163. Minimum Difference in Sums After Removal of Elements
 * https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/
 * Difficulty: Hard
 *
 * You are given a 0-indexed integer array nums consisting of 3 * n elements.
 *
 * You are allowed to remove any subsequence of elements of size exactly n from nums.
 * The remaining 2 * n elements will be divided into two equal parts:
 * - The first n elements belonging to the first part and their sum is sumfirst.
 * - The next n elements belonging to the second part and their sum is sumsecond.
 *
 * The difference in sums of the two parts is denoted as sumfirst - sumsecond.
 * - For example, if sumfirst = 3 and sumsecond = 2, their difference is 1.
 * - Similarly, if sumfirst = 2 and sumsecond = 3, their difference is -1.
 *
 * Return the minimum difference possible between the sums of the two parts after the removal
 * of n elements.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDifference = function(nums) {
  const n = nums.length / 3;
  const minFirstPart = new Array(nums.length).fill(0);
  const maxSecondPart = new Array(nums.length).fill(0);
  const maxHeap = new PriorityQueue((a, b) => b - a);
  const minHeap = new PriorityQueue((a, b) => a - b);

  let currentSum = 0;
  for (let i = 0; i < n; i++) {
    maxHeap.enqueue(nums[i]);
    currentSum += nums[i];
  }
  minFirstPart[n - 1] = currentSum;

  for (let i = n; i < 2 * n; i++) {
    maxHeap.enqueue(nums[i]);
    currentSum += nums[i];
    const removed = maxHeap.dequeue();
    currentSum -= removed;
    minFirstPart[i] = currentSum;
  }

  currentSum = 0;
  minHeap.clear();
  for (let i = 2 * n; i < 3 * n; i++) {
    minHeap.enqueue(nums[i]);
    currentSum += nums[i];
  }
  maxSecondPart[2 * n] = currentSum;

  for (let i = 2 * n - 1; i >= n; i--) {
    minHeap.enqueue(nums[i]);
    currentSum += nums[i];
    const removed = minHeap.dequeue();
    currentSum -= removed;
    maxSecondPart[i] = currentSum;
  }

  let result = Infinity;
  for (let i = n - 1; i < 2 * n; i++) {
    const difference = minFirstPart[i] - maxSecondPart[i + 1];
    result = Math.min(result, difference);
  }

  return result;
};
