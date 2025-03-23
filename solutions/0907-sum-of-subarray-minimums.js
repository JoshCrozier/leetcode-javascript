/**
 * 907. Sum of Subarray Minimums
 * https://leetcode.com/problems/sum-of-subarray-minimums/
 * Difficulty: Medium
 *
 * Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous)
 * subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
  const MOD = 1e9 + 7;
  const left = new Array(arr.length);
  const right = new Array(arr.length);
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }
    left[i] = stack.length ? i - stack[stack.length - 1] : i + 1;
    stack.push(i);
  }

  stack.length = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    right[i] = stack.length ? stack[stack.length - 1] - i : arr.length - i;
    stack.push(i);
  }

  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = (result + arr[i] * left[i] * right[i]) % MOD;
  }

  return result;
};
