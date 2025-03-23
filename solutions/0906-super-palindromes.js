/**
 * 906. Super Palindromes
 * https://leetcode.com/problems/super-palindromes/
 * Difficulty: Hard
 *
 * Let's say a positive integer is a super-palindrome if it is a palindrome, and it is also
 * the square of a palindrome.
 *
 * Given two positive integers left and right represented as strings, return the number of
 * super-palindromes integers in the inclusive range [left, right].
 */

/**
 * @param {string} left
 * @param {string} right
 * @return {number}
 */
var superpalindromesInRange = function(lowerBound, upperBound) {
  let result = 9n >= lowerBound && 9n <= upperBound ? 1 : 0;

  const isPalindrome = sequence => {
    for (let start = 0, end = sequence.length - 1; start < end; start++, end--) {
      if (sequence[start] !== sequence[end]) return false;
    }
    return true;
  };

  for (let base = 1; base < 19684; base++) {
    const ternary = base.toString(3);
    if (isPalindrome(ternary)) {
      const square = BigInt(ternary) * BigInt(ternary);
      if (square > upperBound) return result;
      if (square >= lowerBound && isPalindrome(square.toString())) {
        result++;
      }
    }
  }

  return result;
};
