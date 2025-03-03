/**
 * 480. Sliding Window Median
 * https://leetcode.com/problems/sliding-window-median/
 * Difficulty: Hard
 *
 * The median is the middle value in an ordered integer list. If the size of the list is even,
 * there is no middle value. So the median is the mean of the two middle values.
 *
 * - For examples, if arr = [2,3,4], the median is 3.
 * - For examples, if arr = [1,2,3,4], the median is (2 + 3) / 2 = 2.5.
 *
 * You are given an integer array nums and an integer k. There is a sliding window of size k
 * which is moving from the very left of the array to the very right. You can only see the k
 * numbers in the window. Each time the sliding window moves right by one position.
 *
 * Return the median array for each window in the original array. Answers within 10-5 of the
 * actual value will be accepted.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
  const maxHeap = new MaxPriorityQueue();
  const minHeap = new MinPriorityQueue();
  const result = [];
  const map = {};

  for (let i = 0; i < k; i++) maxHeap.enqueue(nums[i]);
  for (let i = 0; i < k >> 1; i++) minHeap.enqueue(maxHeap.dequeue());
  for (let i = k; i <= nums.length; i++) {
    result.push(k & 1 ? maxHeap.front() : (maxHeap.front() + minHeap.front()) / 2);
    if (i === nums.length) break;
    map[nums[i - k]] = (map[nums[i - k]] || 0) + 1;
    const balance = (nums[i - k] <= maxHeap.front() ? -1 : 1)
      + (nums[i] <= maxHeap.front() ? 1 : -1);
    nums[i] <= maxHeap.front() ? maxHeap.enqueue(nums[i]) : minHeap.enqueue(nums[i]);
    balance < 0 && minHeap.size() && maxHeap.enqueue(minHeap.dequeue());
    balance > 0 && maxHeap.size() && minHeap.enqueue(maxHeap.dequeue());
    while (maxHeap.size() && map[maxHeap.front()]) map[maxHeap.dequeue()]--;
    while (minHeap.size() && map[minHeap.front()]) map[minHeap.dequeue()]--;
  }

  return result;
};
