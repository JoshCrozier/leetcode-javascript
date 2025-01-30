/**
 * 155. Min Stack
 * https://leetcode.com/problems/min-stack/
 * Difficulty: Medium
 *
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 *
 * Implement the MinStack class:
 * - MinStack() initializes the stack object.
 * - void push(int val) pushes the element val onto the stack.
 * - void pop() removes the element on the top of the stack.
 * - int top() gets the top element of the stack.
 * - int getMin() retrieves the minimum element in the stack.
 *
 * You must implement a solution with O(1) time complexity for each function.
 */


var MinStack = function() {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push({ val, min: this.stack.length ? Math.min(val, this.getMin()) : val });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.stack.length ? this.stack[this.stack.length - 1].min : 0;
};
