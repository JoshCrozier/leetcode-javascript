/**
 * 2829. Determine the Minimum Sum of a k-avoiding Array
 * https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/
 * Difficulty: Medium
 *
 * You are given two integers, n and k.
 *
 * An array of distinct positive integers is called a k-avoiding array if there does not exist
 * any pair of distinct elements that sum to k.
 *
 * Return the minimum possible sum of a k-avoiding array of length n.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minimumSum = function(n, k) {
  const set = new Set();
  let result = 0;
  let num = 1;

  for (let i = 0; i < n; i++) {
    while (set.has(k - num)) {
      num++;
    }
    result += num;
    set.add(num);
    num++;
  }

  return result;
};
