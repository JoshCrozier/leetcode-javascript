/**
 * 1318. Minimum Flips to Make a OR b Equal to c
 * https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/
 * Difficulty: Medium
 *
 * Given 3 positives numbers a, b and c.
 * Return the minimum flips required in some bits of a and b
 * to make ( a OR b == c ). (bitwise OR operation).
 *
 * Flip operation consists of change any single bit 1 to 0
 * or change the bit 0 to 1 in their binary representation.
 */

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c, flips = 0) {
  [a, b, c] = [a, b, c].map(x => x.toString(2).padStart(32, 0));

  for (let i = 0; i < c.length; i++) {
    if ((+a[i] | +b[i]) !== +c[i]) {
      if (((+a[i] ^ 1) | +b[i]) === +c[i] || (+a[i] | (+b[i] ^ 1)) === +c[i]) flips++;
      else if (((+a[i] ^ 1) | (+b[i] ^ 1)) === +c[i]) flips += 2;
    }
  }

  return flips;
};
