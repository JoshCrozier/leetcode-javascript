/**
 * 2433. Find The Original Array of Prefix Xor
 * https://leetcode.com/problems/find-the-original-array-of-prefix-xor/
 * Difficulty: Medium
 *
 * You are given an integer array pref of size n. Find and return the array arr of size
 * n that satisfies:
 * - pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].
 *
 * Note that ^ denotes the bitwise-xor operation.
 *
 * It can be proven that the answer is unique.
 */

/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
  const result = new Array(pref.length);
  result[0] = pref[0];

  for (let i = 1; i < pref.length; i++) {
    result[i] = pref[i] ^ pref[i - 1];
  }

  return result;
};
