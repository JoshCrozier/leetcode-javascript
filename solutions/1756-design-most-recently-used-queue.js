/**
 * 1756. Design Most Recently Used Queue
 * https://leetcode.com/problems/design-most-recently-used-queue/
 * Difficulty: Medium
 *
 * Design a queue-like data structure that moves the most recently used element to the end
 * of the queue.
 *
 * Implement the MRUQueue class:
 * - MRUQueue(int n) constructs the MRUQueue with n elements: [1,2,3,...,n].
 * - int fetch(int k) moves the kth element (1-indexed) to the end of the queue and returns it.
 */

/**
 * @param {number} n
 */
var MRUQueue = function(n) {
  this.elements = Array.from({ length: n }, (_, i) => i + 1);
};

/**
 * @param {number} k
 * @return {number}
 */
MRUQueue.prototype.fetch = function(k) {
  const element = this.elements[k - 1];
  this.elements.splice(k - 1, 1);
  this.elements.push(element);
  return element;
};
