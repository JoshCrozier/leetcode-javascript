/**
 * 1429. First Unique Number
 * https://leetcode.com/problems/first-unique-number/
 * Difficulty: Medium
 *
 * You have a queue of integers, you need to retrieve the first unique integer in the queue.
 *
 * Implement the FirstUnique class:
 * - FirstUnique(int[] nums) Initializes the object with the numbers in the queue.
 * - int showFirstUnique() returns the value of the first unique integer of the queue, and
 *   returns -1 if there is no such integer.
 * - void add(int value) insert value to the queue.
 */

/**
* @param {number[]} nums
*/
var FirstUnique = function(nums) {
  this.queue = [];
  this.counts = new Map();
  this.uniqueSet = new Set();

  for (const num of nums) {
    this.add(num);
  }
};

/**
* @return {number}
*/
FirstUnique.prototype.showFirstUnique = function() {
  while (this.queue.length > 0 && !this.uniqueSet.has(this.queue[0])) {
    this.queue.shift();
  }
  return this.queue.length > 0 ? this.queue[0] : -1;
};

/**
* @param {number} value
* @return {void}
*/
FirstUnique.prototype.add = function(value) {
  const count = this.counts.get(value) || 0;
  this.counts.set(value, count + 1);

  if (count === 0) {
    this.queue.push(value);
    this.uniqueSet.add(value);
  } else if (count === 1) {
    this.uniqueSet.delete(value);
  }
};
