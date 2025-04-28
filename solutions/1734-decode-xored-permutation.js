/**
 * 1734. Decode XORed Permutation
 * https://leetcode.com/problems/decode-xored-permutation/
 * Difficulty: Medium
 *
 * There is an integer array perm that is a permutation of the first n positive integers,
 * where n is always odd.
 *
 * It was encoded into another integer array encoded of length n - 1, such that
 * encoded[i] = perm[i] XOR perm[i + 1]. For example, if perm = [1,3,2], then encoded = [2,1].
 *
 * Given the encoded array, return the original array perm. It is guaranteed that the answer
 * exists and is unique.
 */

/**
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function(encoded) {
  const n = encoded.length + 1;
  let totalXor = 0;
  for (let i = 1; i <= n; i++) {
    totalXor ^= i;
  }

  let oddXor = 0;
  for (let i = 1; i < encoded.length; i += 2) {
    oddXor ^= encoded[i];
  }

  const result = new Array(n);
  result[0] = totalXor ^ oddXor;

  for (let i = 0; i < n - 1; i++) {
    result[i + 1] = result[i] ^ encoded[i];
  }

  return result;
};
