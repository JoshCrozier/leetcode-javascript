/**
 * 1720. Decode XORed Array
 * https://leetcode.com/problems/decode-xored-array/
 * Difficulty: Easy
 *
 * There is a hidden integer array arr that consists of n non-negative integers.
 *
 * It was encoded into another integer array encoded of length n - 1, such that
 * encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3].
 *
 * You are given the encoded array. You are also given an integer first, that is the first
 * element of arr, i.e. arr[0].
 *
 * Return the original array arr. It can be proved that the answer exists and is unique.
 */

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
  const result = [first];

  for (let i = 0; i < encoded.length; i++) {
    result.push(result[i] ^ encoded[i]);
  }

  return result;
};
