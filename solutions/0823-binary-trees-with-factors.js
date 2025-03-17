/**
 * 823. Binary Trees With Factors
 * https://leetcode.com/problems/binary-trees-with-factors/
 * Difficulty: Medium
 *
 * Given an array of unique integers, arr, where each integer arr[i] is strictly greater than 1.
 *
 * We make a binary tree using these integers, and each number may be used for any number of times.
 * Each non-leaf node's value should be equal to the product of the values of its children.
 *
 * Return the number of binary trees we can make. The answer may be too large so return the answer
 * modulo 109 + 7.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
  const MOD = 1e9 + 7;
  const dp = {};
  const numMap = new Map();

  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    numMap.set(arr[i], i);
  }

  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    dp[arr[i]] = 1;
    for (let j = 0; j < i; j++) {
      if (arr[i] % arr[j] === 0) {
        const complement = arr[i] / arr[j];
        if (numMap.has(complement)) {
          dp[arr[i]] = (dp[arr[i]] + dp[arr[j]] * dp[complement]) % MOD;
        }
      }
    }
    result = (result + dp[arr[i]]) % MOD;
  }

  return result;
};
