/**
 * 3422. Minimum Operations to Make Subarray Elements Equal
 * https://leetcode.com/problems/minimum-operations-to-make-subarray-elements-equal/
 * Difficulty: Medium
 *
 * You are given an integer array nums and an integer k. You can perform the following operation
 * any number of times:
 * - Increase or decrease any element of nums by 1.
 *
 * Return the minimum number of operations required to ensure that at least one subarray of size
 * k in nums has all elements equal.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  const n = nums.length;
  const minHeap = new PriorityQueue((a, b) => a[0] < b[0] ? -1 : 1);
  const maxHeap = new PriorityQueue((a, b) => a[0] > b[0] ? -1 : 1);
  const maxHeapSize = Math.ceil(k / 2);
  const minHeapSize = k - maxHeapSize;

  let total = 0;
  for (let i = 0; i < k; i++) {
    total += nums[i];
    maxHeap.enqueue([nums[i], i]);
  }

  let minSum = 0;
  const minHeapIndices = new Set();
  for (let i = 0; i < minHeapSize; i++) {
    const [num, idx] = maxHeap.dequeue();
    minSum += num;
    minHeap.enqueue([num, idx]);
    minHeapIndices.add(idx);
  }

  let maxSum = total - minSum;
  let median = maxHeap.front()[0];
  let result = Math.abs(median * maxHeapSize - maxSum) + Math.abs(minSum - median * minHeapSize);

  for (let i = k; i < n; i++) {
    const num = nums[i];
    const leftOut = i - k;
    total += num - nums[leftOut];

    while (!minHeap.isEmpty() && minHeap.front()[1] <= leftOut) minHeap.dequeue();
    while (!maxHeap.isEmpty() && maxHeap.front()[1] <= leftOut) maxHeap.dequeue();

    if (minHeapIndices.has(leftOut)) {
      minHeapIndices.delete(leftOut);
      minSum -= nums[leftOut];
      maxHeap.enqueue([num, i]);
      const [newNum, newIdx] = maxHeap.dequeue();
      minSum += newNum;
      minHeap.enqueue([newNum, newIdx]);
      minHeapIndices.add(newIdx);
    } else {
      minHeap.enqueue([num, i]);
      minSum += num;
      minHeapIndices.add(i);
      const [newNum, newIdx] = minHeap.dequeue();
      minHeapIndices.delete(newIdx);
      minSum -= newNum;
      maxHeap.enqueue([newNum, newIdx]);
    }

    maxSum = total - minSum;
    while (!maxHeap.isEmpty() && maxHeap.front()[1] <= leftOut) maxHeap.dequeue();
    median = maxHeap.front()[0];
    result = Math.min(
      result,
      Math.abs(median * maxHeapSize - maxSum) + Math.abs(minSum - median * minHeapSize)
    );
  }

  return result;
};
