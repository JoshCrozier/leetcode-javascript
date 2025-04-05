/**
 * 1172. Dinner Plate Stacks
 * https://leetcode.com/problems/dinner-plate-stacks/
 * Difficulty: Hard
 *
 * You have an infinite number of stacks arranged in a row and numbered (left to right) from 0,
 * each of the stacks has the same maximum capacity.
 *
 * Implement the DinnerPlates class:
 * - DinnerPlates(int capacity) Initializes the object with the maximum capacity of the stacks
 *   capacity.
 * - void push(int val) Pushes the given integer val into the leftmost stack with a size less
 *   than capacity.
 * - int pop() Returns the value at the top of the rightmost non-empty stack and removes it
 *   from that stack, and returns -1 if all the stacks are empty.
 * - int popAtStack(int index) Returns the value at the top of the stack with the given index
 *   index and removes it from that stack or returns -1 if the stack with that given index is empty.
 */

/**
 * @param {number} capacity
 */
var DinnerPlates = function(capacity) {
  this.maxCapacity = capacity;
  this.plateStacks = [];
  this.availableIndices = [];
};

/**
 * @param {number} val
 * @return {void}
 */
DinnerPlates.prototype.push = function(val) {
  const targetIndex = this.availableIndices.length
    ? this.availableIndices.pop()
    : this.plateStacks.length - 1;

  if (!this.plateStacks[targetIndex] || this.plateStacks[targetIndex].length === this.maxCapacity) {
    this.plateStacks.push([val]);
  } else {
    this.plateStacks[targetIndex].push(val);
  }
};

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function() {
  while (this.plateStacks.length && !this.plateStacks.at(-1).length) {
    while (this.plateStacks.length - 1 === this.availableIndices.at(-1)) {
      this.availableIndices.pop();
    }
    this.plateStacks.pop();
  }

  if (!this.plateStacks.length) {
    return -1;
  }

  const result = this.plateStacks.at(-1).pop() ?? -1;

  while (this.plateStacks.length && !this.plateStacks.at(-1).length) {
    while (this.plateStacks.length - 1 === this.availableIndices.at(-1)) {
      this.availableIndices.pop();
    }
    this.plateStacks.pop();
  }

  return result;
};

/**
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function(index) {
  if (index >= this.plateStacks.length || !this.plateStacks[index].length) {
    return -1;
  }

  const result = this.plateStacks[index].pop();
  const temp = [];

  while (this.availableIndices.length && this.availableIndices.at(-1) < index) {
    temp.push(this.availableIndices.pop());
  }

  this.availableIndices.push(index);
  while (temp.length) {
    this.availableIndices.push(temp.shift());
  }

  return result;
};
