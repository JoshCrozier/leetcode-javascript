/**
 * 1442. Count Triplets That Can Form Two Arrays of Equal XOR
 * https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/
 * Difficulty: Medium
 *
 * Given an array of integers arr.
 *
 * We want to select three indices i, j and k where (0 <= i < j <= k < arr.length).
 *
 * Let's define a and b as follows:
 * - a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
 * - b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]
 *
 * Note that ^ denotes the bitwise-xor operation.
 *
 * Return the number of triplets (i, j and k) Where a == b.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
  const prefixXor = [0];
  let result = 0;

  for (const num of arr) {
    prefixXor.push(prefixXor[prefixXor.length - 1] ^ num);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if ((prefixXor[k + 1] ^ prefixXor[i]) === 0) {
        result += k - i;
      }
    }
  }

  return result;
};
