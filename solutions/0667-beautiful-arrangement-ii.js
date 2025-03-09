/**
 * 667. Beautiful Arrangement II
 * https://leetcode.com/problems/beautiful-arrangement-ii/
 * Difficulty: Medium
 *
 * Given two integers n and k, construct a list answer that contains n different positive integers
 * ranging from 1 to n and obeys the following requirement:
 * - Suppose this list is answer = [a1, a2, a3, ... , an], then the list [|a1 - a2|, |a2 - a3|,
 *   |a3 - a4|, ... , |an-1 - an|] has exactly k distinct integers.
 *
 * Return the list answer. If there multiple valid answers, return any of them.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
  const result = [];

  for (let i = 0, left = 1, right = n; i < n; i++) {
    if (k > 1) {
      result.push(k % 2 === 0 ? right-- : left++);
      k--;
    } else {
      result.push(left++);
    }
  }

  return result;
};
