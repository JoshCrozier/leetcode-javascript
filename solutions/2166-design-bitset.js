/**
 * 2166. Design Bitset
 * https://leetcode.com/problems/design-bitset/
 * Difficulty: Medium
 *
 * A Bitset is a data structure that compactly stores bits.
 *
 * Implement the Bitset class:
 * - Bitset(int size) Initializes the Bitset with size bits, all of which are 0.
 * - void fix(int idx) Updates the value of the bit at the index idx to 1. If the value was
 *   already 1, no change occurs.
 * - void unfix(int idx) Updates the value of the bit at the index idx to 0. If the value
 *   was already 0, no change occurs.
 * - void flip() Flips the values of each bit in the Bitset. In other words, all bits with
 *   value 0 will now have value 1 and vice versa.
 * - boolean all() Checks if the value of each bit in the Bitset is 1. Returns true if it
 *   satisfies the condition, false otherwise.
 * - boolean one() Checks if there is at least one bit in the Bitset with value 1. Returns
 *   true if it satisfies the condition, false otherwise.
 * - int count() Returns the total number of bits in the Bitset which have value 1.
 * - String toString() Returns the current composition of the Bitset. Note that in the
 *   resultant string, the character at the ith index should coincide with the value at
 *   the ith bit of the Bitset.
 */

/**
 * @param {number} size
 */
var Bitset = function(size) {
  this.bits = new Uint8Array(size);
  this.ones = 0;
  this.flipped = false;
};

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.fix = function(idx) {
  if (this.flipped) {
    if (this.bits[idx] === 1) {
      this.bits[idx] = 0;
      this.ones++;
    }
  } else {
    if (this.bits[idx] === 0) {
      this.bits[idx] = 1;
      this.ones++;
    }
  }
};

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.unfix = function(idx) {
  if (this.flipped) {
    if (this.bits[idx] === 0) {
      this.bits[idx] = 1;
      this.ones--;
    }
  } else {
    if (this.bits[idx] === 1) {
      this.bits[idx] = 0;
      this.ones--;
    }
  }
};

/**
 * @return {void}
 */
Bitset.prototype.flip = function() {
  this.flipped = !this.flipped;
  this.ones = this.bits.length - this.ones;
};

/**
 * @return {boolean}
 */
Bitset.prototype.all = function() {
  return this.ones === this.bits.length;
};

/**
 * @return {boolean}
 */
Bitset.prototype.one = function() {
  return this.ones > 0;
};

/**
 * @return {number}
 */
Bitset.prototype.count = function() {
  return this.ones;
};

/**
 * @return {string}
 */
Bitset.prototype.toString = function() {
  let result = '';
  for (let i = 0; i < this.bits.length; i++) {
    result += this.flipped ? 1 - this.bits[i] : this.bits[i];
  }
  return result;
};
