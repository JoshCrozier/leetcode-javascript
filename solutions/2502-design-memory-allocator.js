/**
 * 2502. Design Memory Allocator
 * https://leetcode.com/problems/design-memory-allocator/
 * Difficulty: Medium
 *
 * You are given an integer n representing the size of a 0-indexed memory array. All memory
 * units are initially free.
 *
 * You have a memory allocator with the following functionalities:
 * 1. Allocate a block of size consecutive free memory units and assign it the id mID.
 * 2. Free all memory units with the given id mID.
 *
 * Note that:
 * - Multiple blocks can be allocated to the same mID.
 * - You should free all the memory units with mID, even if they were allocated in different blocks.
 *
 * Implement the Allocator class:
 * - Allocator(int n) Initializes an Allocator object with a memory array of size n.
 * - int allocate(int size, int mID) Find the leftmost block of size consecutive free memory units
 *   and allocate it with the id mID. Return the block's first index. If such a block does not
 *   exist, return -1.
 * - int freeMemory(int mID) Free all memory units with the id mID. Return the number of memory
 *   units you have freed.
 */

/**
 * @param {number} n
 */
var Allocator = function(n) {
  this.memory = Array(n).fill(0);
};

/**
 * @param {number} size
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.allocate = function(size, mID) {
  let start = -1;
  let count = 0;

  for (let i = 0; i < this.memory.length; i++) {
    if (this.memory[i] === 0) {
      if (start === -1) start = i;
      count++;
      if (count === size) {
        for (let j = start; j < start + size; j++) {
          this.memory[j] = mID;
        }
        return start;
      }
    } else {
      start = -1;
      count = 0;
    }
  }

  return -1;
};

/**
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.freeMemory = function(mID) {
  let result = 0;

  for (let i = 0; i < this.memory.length; i++) {
    if (this.memory[i] === mID) {
      this.memory[i] = 0;
      result++;
    }
  }

  return result;
};
