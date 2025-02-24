/**
 * 393. UTF-8 Validation
 * https://leetcode.com/problems/utf-8-validation/
 * Difficulty: Medium
 *
 * Given an integer array data representing the data, return whether it is a valid UTF-8 encoding
 * (i.e. it translates to a sequence of valid UTF-8 encoded characters).
 *
 * A character in UTF8 can be from 1 to 4 bytes long, subjected to the following rules:
 * 1. For a 1-byte character, the first bit is a 0, followed by its Unicode code.
 * 2. For an n-bytes character, the first n bits are all one's, the n + 1 bit is 0, followed by
 *   n - 1 bytes with the most significant 2 bits being 10.
 *
 * This is how the UTF-8 encoding would work:
 *      Number of Bytes   |        UTF-8 Octet Sequence
 *                        |              (binary)
 *    --------------------+-----------------------------------------
 *             1          |   0xxxxxxx
 *             2          |   110xxxxx 10xxxxxx
 *             3          |   1110xxxx 10xxxxxx 10xxxxxx
 *             4          |   11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
 *
 * x denotes a bit in the binary form of a byte that may be either 0 or 1.
 *
 * Note: The input is an array of integers. Only the least significant 8 bits of each integer is
 * used to store the data. This means each integer represents only 1 byte of data.
 */

/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
  let result = 0;

  for (const n of data) {
    if (result === 0) {
      if (n >> 7 === 0) result = 0;
      else if (n >> 5 === 0b110) result = 1;
      else if (n >> 4 === 0b1110) result = 2;
      else if (n >> 3 === 0b11110) result = 3;
      else return false;
    } else {
      if (n >> 6 !== 0b10) return false;
      result--;
    }
  }

  return result === 0;
};
