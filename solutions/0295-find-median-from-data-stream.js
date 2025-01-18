/**
 * 295. Find Median from Data Stream
 * https://leetcode.com/problems/find-median-from-data-stream/
 * Difficulty: Hard
 *
 * The median is the middle value in an ordered integer list. If the size of the list is
 * even, there is no middle value, and the median is the mean of the two middle values.
 *
 * - For example, for arr = [2,3,4], the median is 3.
 * - For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
 *
 * Implement the MedianFinder class:
 * - MedianFinder() initializes the MedianFinder object.
 * - void addNum(int num) adds the integer num from the data stream to the data structure.
 * - double findMedian() returns the median of all elements so far. Answers within 10-5 of
 *   the actual answer will be accepted.
 */


var MedianFinder = function() {
  this.minHeap = new MinPriorityQueue();
  this.maxHeap = new MaxPriorityQueue();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  this.minHeap.enqueue(num);
  this.maxHeap.enqueue(this.minHeap.dequeue().element);
  if (this.minHeap.size() < this.maxHeap.size()) {
    this.minHeap.enqueue(this.maxHeap.dequeue().element);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  return this.minHeap.size() > this.maxHeap.size()
    ? this.minHeap.front().element
    : (this.minHeap.front().element + this.maxHeap.front().element) / 2;
};
