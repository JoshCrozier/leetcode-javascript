/**
 * 3199. Count Triplets with Even XOR Set Bits I
 * https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-i/
 * Difficulty: Easy
 *
 * Given three integer arrays a, b, and c, return the number of triplets (a[i], b[j], c[k]),
 * such that the bitwise XOR of the elements of each triplet has an even number of set bits.
 */

/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number[]} c
 * @return {number}
 */
var tripletCount = function(a, b, c) {
  let result = 0;

  for (const numA of a) {
    for (const numB of b) {
      for (const numC of c) {
        const xorResult = numA ^ numB ^ numC;
        if (hasEvenSetBits(xorResult)) {
          result++;
        }
      }
    }
  }

  return result;

  function hasEvenSetBits(num) {
    let setBitsCount = 0;

    while (num > 0) {
      setBitsCount += num & 1;
      num >>= 1;
    }

    return setBitsCount % 2 === 0;
  }
};
