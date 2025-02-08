/**
 * 2349. Design a Number Container System
 * https://leetcode.com/problems/design-a-number-container-system/
 * Difficulty: Medium
 *
 * Design a number container system that can do the following:
 * - Insert or Replace a number at the given index in the system.
 * - Return the smallest index for the given number in the system.
 *
 * Implement the NumberContainers class:
 * - NumberContainers() Initializes the number container system.
 * - void change(int index, int number) Fills the container at index with the number.
 *   If there is already a number at that index, replace it.
 * - int find(int number) Returns the smallest index for the given number, or -1 if
 *   there is no index that is filled by number in the system.
 */

var NumberContainers = function() {
  this.indexMap = new Map();
  this.lookup = new Map();
};

/**
 * @param {number} index
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
  this.indexMap.set(index, number);
  this.getQueue(number).enqueue(index);
};

/**
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
  const queue = this.getQueue(number);
  while (queue.size() && this.indexMap.get(queue.front()) !== number) {
    queue.dequeue();
  }
  return queue.size() ? queue.front() : -1;
};

NumberContainers.prototype.getQueue = function(number) {
  if (!this.lookup.has(number)) {
    this.lookup.set(number, new PriorityQueue({ compare: (a, b) => a - b }));
  }
  return this.lookup.get(number);
};
