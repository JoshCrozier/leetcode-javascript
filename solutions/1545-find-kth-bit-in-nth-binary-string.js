/**
 * 1545. Find Kth Bit in Nth Binary String
 * https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/
 * Difficulty: Medium
 *
 * Given two positive integers n and k, the binary string Sn is formed as follows:
 * - S1 = "0"
 * - Si = Si - 1 + "1" + reverse(invert(Si - 1)) for i > 1
 *
 * Where + denotes the concatenation operation, reverse(x) returns the reversed string x, and
 * invert(x) inverts all the bits in x (0 changes to 1 and 1 changes to 0).
 *
 * For example, the first four strings in the above sequence are:
 * - S1 = "0"
 * - S2 = "011"
 * - S3 = "0111001"
 * - S4 = "011100110110001"
 *
 * Return the kth bit in Sn. It is guaranteed that k is valid for the given n.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
  let position = k - 1;
  let invertCount = 0;
  let length = (1 << n) - 1;

  while (position !== 0) {
    const mid = length >> 1;

    if (position === mid) {
      return invertCount % 2 === 0 ? '1' : '0';
    }

    if (position > mid) {
      position = length - position - 1;
      invertCount++;
    } else {
      length = mid;
    }
  }

  return invertCount % 2 === 0 ? '0' : '1';
};
