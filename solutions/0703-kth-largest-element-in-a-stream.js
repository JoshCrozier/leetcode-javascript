/**
 * 703. Kth Largest Element in a Stream
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/
 * Difficulty: Easy
 *
 * You are part of a university admissions office and need to keep track of the kth highest test
 * score from applicants in real-time. This helps to determine cut-off marks for interviews and
 * admissions dynamically as new applicants submit their scores.
 *
 * You are tasked to implement a class which, for a given integer k, maintains a stream of test
 * scores and continuously returns the kth highest test score after a new score has been submitted.
 * More specifically, we are looking for the kth highest score in the sorted list of all scores.
 *
 * Implement the KthLargest class:
 * - KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of
 *   test scores nums.
 * - int add(int val) Adds a new test score val to the stream and returns the element representing
 *   the kth largest element in the pool of test scores so far.
 */

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.main = new MinPriorityQueue();
  this.k = k;

  nums.forEach(n => this.main.enqueue(n));

  while (this.main.size() > k) {
    this.main.dequeue().element;
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.main.enqueue(val);

  if (this.main.size() > this.k) {
    this.main.dequeue().element;
  }

  return this.main.front().element;
};
