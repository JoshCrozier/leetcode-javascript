/**
 * 895. Maximum Frequency Stack
 * https://leetcode.com/problems/maximum-frequency-stack/
 * Difficulty: Hard
 *
 * Design a stack-like data structure to push elements to the stack and pop the most frequent
 * element from the stack.
 *
 * Implement the FreqStack class:
 * - FreqStack() constructs an empty frequency stack.
 * - void push(int val) pushes an integer val onto the top of the stack.
 * - int pop() removes and returns the most frequent element in the stack.
 *   - If there is a tie for the most frequent element, the element closest to the stack's
 *     top is removed and returned.
 */

var FreqStack = function() {
  this.frequencyMap = new Map();
  this.groupMap = new Map();
  this.maxFrequency = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
  const frequency = (this.frequencyMap.get(val) || 0) + 1;
  this.frequencyMap.set(val, frequency);
  this.maxFrequency = Math.max(this.maxFrequency, frequency);

  if (!this.groupMap.has(frequency)) {
    this.groupMap.set(frequency, []);
  }
  this.groupMap.get(frequency).push(val);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
  const topGroup = this.groupMap.get(this.maxFrequency);
  const val = topGroup.pop();

  this.frequencyMap.set(val, this.maxFrequency - 1);
  if (topGroup.length === 0) {
    this.groupMap.delete(this.maxFrequency);
    this.maxFrequency--;
  }

  return val;
};
