/**
 * 1670. Design Front Middle Back Queue
 * https://leetcode.com/problems/design-front-middle-back-queue/
 * Difficulty: Medium
 *
 * Design a queue that supports push and pop operations in the front, middle, and back.
 *
 * Implement the FrontMiddleBack class:
 * - FrontMiddleBack() Initializes the queue.
 * - void pushFront(int val) Adds val to the front of the queue.
 * - void pushMiddle(int val) Adds val to the middle of the queue.
 * - void pushBack(int val) Adds val to the back of the queue.
 * - int popFront() Removes the front element of the queue and returns it. If the queue is
 *   empty, return -1.
 * - int popMiddle() Removes the middle element of the queue and returns it. If the queue is
 *   empty, return -1.
 * - int popBack() Removes the back element of the queue and returns it. If the queue is
 *   empty, return -1.
 *
 * Notice that when there are two middle position choices, the operation is performed on the
 * frontmost middle position choice. For example:
 * - Pushing 6 into the middle of [1, 2, 3, 4, 5] results in [1, 2, 6, 3, 4, 5].
 * - Popping the middle from [1, 2, 3, 4, 5, 6] returns 3 and results in [1, 2, 4, 5, 6].
 */

var FrontMiddleBackQueue = function() {
  this.elements = [];
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
  this.elements.unshift(val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
  const mid = Math.floor(this.elements.length / 2);
  this.elements.splice(mid, 0, val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
  this.elements.push(val);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
  return this.elements.length ? this.elements.shift() : -1;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
  if (!this.elements.length) return -1;
  const mid = Math.floor((this.elements.length - 1) / 2);
  return this.elements.splice(mid, 1)[0];
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
  return this.elements.length ? this.elements.pop() : -1;
};
