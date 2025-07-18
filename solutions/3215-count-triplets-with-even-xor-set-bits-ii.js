/**
 * 3215. Count Triplets with Even XOR Set Bits II
 * https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-ii/
 * Difficulty: Medium
 *
 * Given three integer arrays a, b, and c, return the number of triplets (a[i], b[j], c[k]),
 * such that the bitwise XOR between the elements of each triplet has an even number of set bits.
 */

/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number[]} c
 * @return {number}
 */
var tripletCount = function(a, b, c) {
  const countA = [0, 0];
  const countB = [0, 0];
  const countC = [0, 0];

  for (const num of a) {
    countA[countSetBits(num) % 2]++;
  }
  for (const num of b) {
    countB[countSetBits(num) % 2]++;
  }
  for (const num of c) {
    countC[countSetBits(num) % 2]++;
  }

  let result = 0;
  result += countA[0] * countB[0] * countC[0];
  result += countA[1] * countB[1] * countC[0];
  result += countA[1] * countB[0] * countC[1];
  result += countA[0] * countB[1] * countC[1];

  return result;

  function countSetBits(num) {
    let count = 0;
    while (num > 0) {
      count += num & 1;
      num >>= 1;
    }
    return count;
  }
};
