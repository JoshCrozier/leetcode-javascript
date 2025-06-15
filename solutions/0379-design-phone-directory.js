/**
 * 379. Design Phone Directory
 * https://leetcode.com/problems/design-phone-directory/
 * Difficulty: Medium
 *
 * Design a phone directory that initially has maxNumbers empty slots that can store numbers.
 * The directory should store numbers, check if a certain slot is empty or not, and empty a
 * given slot.
 *
 * Implement the PhoneDirectory class:
 * - PhoneDirectory(int maxNumbers) Initializes the phone directory with the number of
 *   available slots maxNumbers.
 * - int get() Provides a number that is not assigned to anyone. Returns -1 if no number
 *   is available.
 * - bool check(int number) Returns true if the slot number is available and false otherwise.
 * - void release(int number) Recycles or releases the slot number.
 */

/**
 * @param {number} maxNumbers
 */
var PhoneDirectory = function(maxNumbers) {
  this.available = new Set();
  this.released = [];
  this.max = maxNumbers;
  for (let i = 0; i < maxNumbers; i++) {
    this.available.add(i);
  }
};

/**
 * @return {number}
 */
PhoneDirectory.prototype.get = function() {
  if (this.available.size === 0 && this.released.length === 0) return -1;
  let number;
  if (this.released.length > 0) {
    number = this.released.pop();
  } else {
    number = this.available.values().next().value;
    this.available.delete(number);
  }
  return number;
};

/**
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function(number) {
  return number >= 0 && number < this.max
    && (this.available.has(number) || this.released.includes(number));
};

/**
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function(number) {
  if (number >= 0 && number < this.max
      && !this.available.has(number) && !this.released.includes(number)) {
    this.released.push(number);
  }
};
