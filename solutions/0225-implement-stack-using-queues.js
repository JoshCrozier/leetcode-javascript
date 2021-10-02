/**
 * 225. Implement Stack using Queues
 * https://leetcode.com/problems/implement-stack-using-queues/
 * Difficulty: Easy
 *
 * Implement a last-in-first-out (LIFO) stack using only two queues.
 * The implemented stack should support all the functions of a normal
 * stack (push, top, pop, and empty).
 *
 * Implement the MyStack class:
 *
 * - void push(int x) Pushes element x to the top of the stack.
 * - int pop() Removes the element on the top of the stack and returns it.
 * - int top() Returns the element on the top of the stack.
 * - boolean empty() Returns true if the stack is empty, false otherwise.
 */


var MyStack = function() {
  this.data = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.data.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.data.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.data[this.data.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return !this.data.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
