/**
 * 2217. Find Palindrome With Fixed Length
 * https://leetcode.com/problems/find-palindrome-with-fixed-length/
 * Difficulty: Medium
 *
 * Given an integer array queries and a positive integer intLength, return an array answer where
 * answer[i] is either the queries[i]th smallest positive palindrome of length intLength or -1
 * if no such palindrome exists.
 *
 * A palindrome is a number that reads the same backwards and forwards. Palindromes cannot have
 * leading zeros.
 */

/**
 * @param {number[]} queries
 * @param {number} intLength
 * @return {number[]}
 */
var kthPalindrome = function(queries, intLength) {
  const halfLength = Math.ceil(intLength / 2);
  const maxPalindromes = Math.pow(10, halfLength - 1) * 9;

  return queries.map(generatePalindrome);

  function generatePalindrome(query) {
    if (query > maxPalindromes) return -1;

    let firstHalf = Math.pow(10, halfLength - 1) + query - 1;
    let result = firstHalf;

    if (intLength % 2 === 1) firstHalf = Math.floor(firstHalf / 10);

    while (firstHalf > 0) {
      result = result * 10 + (firstHalf % 10);
      firstHalf = Math.floor(firstHalf / 10);
    }

    return result;
  }
};
