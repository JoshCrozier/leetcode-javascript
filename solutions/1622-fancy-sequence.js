/**
 * 1622. Fancy Sequence
 * https://leetcode.com/problems/fancy-sequence/
 * Difficulty: Hard
 *
 * Write an API that generates fancy sequences using the append, addAll, and multAll operations.
 *
 * Implement the Fancy class:
 * - Fancy() Initializes the object with an empty sequence.
 * - void append(val) Appends an integer val to the end of the sequence.
 * - void addAll(inc) Increments all existing values in the sequence by an integer inc.
 * - void multAll(m) Multiplies all existing values in the sequence by an integer m.
 * - int getIndex(idx) Gets the current value at index idx (0-indexed) of the sequence modulo
 *   109 + 7. If the index is greater or equal than the length of the sequence, return -1.
 */

var Fancy = function() {
  this.sequence = [];
  this.additive = 0n;
  this.multiplicative = 1n;
  this.MOD = 1000000007n;
};

/**
 * @param {number} val
 * @return {void}
 */
Fancy.prototype.append = function(val) {
  const valBig = BigInt(val);
  const inverse = this.modInverse(this.multiplicative);
  const adjustedVal = ((valBig - this.additive + this.MOD) * inverse) % this.MOD;
  this.sequence.push(adjustedVal);
};

/**
 * @param {number} inc
 * @return {void}
 */
Fancy.prototype.addAll = function(inc) {
  this.additive = (this.additive + BigInt(inc)) % this.MOD;
};

/**
 * @param {number} m
 * @return {void}
 */
Fancy.prototype.multAll = function(m) {
  const mBig = BigInt(m);
  this.additive = (this.additive * mBig) % this.MOD;
  this.multiplicative = (this.multiplicative * mBig) % this.MOD;
};

/**
 * @param {number} idx
 * @return {number}
 */
Fancy.prototype.getIndex = function(idx) {
  if (idx >= this.sequence.length) return -1;
  return Number((this.sequence[idx] * this.multiplicative + this.additive) % this.MOD);
};

/**
 * @param {number} a
 * @return {number}
 */
Fancy.prototype.modInverse = function(a) {
  let m = this.MOD;
  const m0 = m;
  let x = 1n;
  let y = 0n;

  a = a % m;
  while (a > 1n) {
    const q = a / m;
    [a, m] = [m, a % m];
    [x, y] = [y, x - q * y];
  }

  return x < 0n ? x + m0 : x;
};
