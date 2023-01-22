/**
 * 131. Palindrome Partitioning
 * https://leetcode.com/problems/palindrome-partitioning/
 * Difficulty: Medium
 *
 * Given a string s, partition s such that every substring of the partition
 * is a palindrome. Return all possible palindrome partitioning of s.
 */

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  return backtrack([], s);
};

function backtrack(order, string, result = []) {
  if (!string.length) {
    result.push(order);
  }

  for (let index = 1; index <= string.length; index++) {
    const sliced = string.slice(0, index);
    if (isPalindrome(sliced)) {
      backtrack([...order, sliced], string.slice(index), result);
    }
  }

  return result;
}

function isPalindrome(input) {
  let right = input.length - 1;
  let left = 0;

  while (left < right) {
    if (input[left] !== input[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
