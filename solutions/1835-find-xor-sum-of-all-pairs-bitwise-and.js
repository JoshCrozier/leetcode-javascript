/**
 * 1835. Find XOR Sum of All Pairs Bitwise AND
 * https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/
 * Difficulty: Hard
 *
 * The XOR sum of a list is the bitwise XOR of all its elements. If the list only contains one
 * element, then its XOR sum will be equal to this element.
 * - For example, the XOR sum of [1,2,3,4] is equal to 1 XOR 2 XOR 3 XOR 4 = 4, and the XOR
 *   sum of [3] is equal to 3.
 *
 * You are given two 0-indexed arrays arr1 and arr2 that consist only of non-negative integers.
 *
 * Consider the list containing the result of arr1[i] AND arr2[j] (bitwise AND) for every (i, j)
 * pair where 0 <= i < arr1.length and 0 <= j < arr2.length.
 *
 * Return the XOR sum of the aforementioned list.
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var getXORSum = function(arr1, arr2) {
  let xor1 = 0;
  let xor2 = 0;

  for (const num of arr1) {
    xor1 ^= num;
  }

  for (const num of arr2) {
    xor2 ^= num;
  }

  return xor1 & xor2;
};
