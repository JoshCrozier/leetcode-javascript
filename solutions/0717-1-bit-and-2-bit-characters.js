/**
 * 717. 1-bit and 2-bit Characters
 * https://leetcode.com/problems/1-bit-and-2-bit-characters/
 * Difficulty: Easy
 *
 * We have two special characters:
 * - The first character can be represented by one bit 0.
 * - The second character can be represented by two bits (10 or 11).
 *
 * Given a binary array bits that ends with 0, return true if the last character
 * must be a one-bit character.
 */

/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  return bits.slice(0, bits.length - 1).join('').replace(/11|10|0/g, '') !== '1';
};
