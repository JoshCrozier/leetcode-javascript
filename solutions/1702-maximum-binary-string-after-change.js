/**
 * 1702. Maximum Binary String After Change
 * https://leetcode.com/problems/maximum-binary-string-after-change/
 * Difficulty: Medium
 *
 * You are given a binary string binary consisting of only 0's or 1's. You can apply each of
 * the following operations any number of times:
 * - Operation 1: If the number contains the substring "00", you can replace it with "10".
 *   - For example, "00010" -> "10010"
 * - Operation 2: If the number contains the substring "10", you can replace it with "01".
 *   - For example, "00010" -> "00001"
 *
 * Return the maximum binary string you can obtain after any number of operations. Binary
 * string x is greater than binary string y if x's decimal representation is greater than
 * y's decimal representation.
 */

/**
 * @param {string} binary
 * @return {string}
 */
var maximumBinaryString = function(binary) {
  const n = binary.length;
  let zeroCount = 0;
  let firstZero = -1;

  for (let i = 0; i < n; i++) {
    if (binary[i] === '0') {
      if (firstZero === -1) firstZero = i;
      zeroCount++;
    }
  }

  if (zeroCount <= 1) return binary;

  const result = new Array(n).fill('1');
  result[firstZero + zeroCount - 1] = '0';

  return result.join('');
};
