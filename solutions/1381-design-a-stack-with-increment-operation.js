/**
 * 1381. Design a Stack With Increment Operation
 * https://leetcode.com/problems/design-a-stack-with-increment-operation/
 * Difficulty: Medium
 *
 * Design a stack that supports increment operations on its elements.
 *
 * Implement the CustomStack class:
 * - CustomStack(int maxSize) Initializes the object with maxSize which is the maximum number
 *   of elements in the stack.
 * - void push(int x) Adds x to the top of the stack if the stack has not reached the maxSize.
 * - int pop() Pops and returns the top of the stack or -1 if the stack is empty.
 * - void inc(int k, int val) Increments the bottom k elements of the stack by val. If there are
 *   less than k elements in the stack, increment all the elements in the stack.
 */

/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
  this.elements = [];
  this.capacity = maxSize;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if (this.elements.length < this.capacity) {
    this.elements.push(x);
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  return this.elements.length ? this.elements.pop() : -1;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  const limit = Math.min(k, this.elements.length);
  for (let i = 0; i < limit; i++) {
    this.elements[i] += val;
  }
};
