/**
 * 716. Max Stack
 * https://leetcode.com/problems/max-stack/
 * Difficulty: Hard
 *
 * Design a max stack data structure that supports the stack operations and supports finding
 * the stack's maximum element.
 *
 * Implement the MaxStack class:
 * - MaxStack() Initializes the stack object.
 * - void push(int x) Pushes element x onto the stack.
 * - int pop() Removes the element on top of the stack and returns it.
 * - int top() Gets the element on the top of the stack without removing it.
 * - int peekMax() Retrieves the maximum element in the stack without removing it.
 * - int popMax() Retrieves the maximum element in the stack and removes it. If there is more
 *   than one maximum element, only remove the top-most one.
 *
 * You must come up with a solution that supports O(1) for each top call and O(logn) for each
 * other call.
 */

var MaxStack = function() {
  this.stack = [];
  this.maxHeap = new PriorityQueue((a, b) => a.val === b.val ? b.id - a.id : b.val - a.val);
  this.nodeId = 0;
  this.deleted = new Set();
};

/**
* @param {number} x
* @return {void}
*/
MaxStack.prototype.push = function(x) {
  const id = this.nodeId++;
  const node = { val: x, id };
  this.stack.push(node);
  this.maxHeap.enqueue(node);
};

/**
* @return {number}
*/
MaxStack.prototype.pop = function() {
  this.cleanStack();
  const node = this.stack.pop();
  this.deleted.add(node.id);
  return node.val;
};

/**
* @return {number}
*/
MaxStack.prototype.top = function() {
  this.cleanStack();
  return this.stack[this.stack.length - 1].val;
};

/**
* @return {number}
*/
MaxStack.prototype.peekMax = function() {
  this.cleanMaxHeap();
  return this.maxHeap.front().val;
};

/**
* @return {number}
*/
MaxStack.prototype.popMax = function() {
  this.cleanMaxHeap();
  const maxNode = this.maxHeap.dequeue();
  this.deleted.add(maxNode.id);
  return maxNode.val;
};

/**
* @return {void}
*/
MaxStack.prototype.cleanStack = function() {
  while (this.stack.length && this.deleted.has(this.stack[this.stack.length - 1].id)) {
    this.stack.pop();
  }
};

/**
* @return {void}
*/
MaxStack.prototype.cleanMaxHeap = function() {
  while (this.maxHeap.size() && this.deleted.has(this.maxHeap.front().id)) {
    this.maxHeap.dequeue();
  }
};
