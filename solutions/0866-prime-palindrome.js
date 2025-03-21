/**
 * 866. Prime Palindrome
 * https://leetcode.com/problems/prime-palindrome/
 * Difficulty: Medium
 *
 * Given an integer n, return the smallest prime palindrome greater than or equal to n.
 *
 * An integer is prime if it has exactly two divisors: 1 and itself. Note that 1 is not a prime
 * number.
 * - For example, 2, 3, 5, 7, 11, and 13 are all primes.
 *
 * An integer is a palindrome if it reads the same from left to right as it does from right to left.
 * - For example, 101 and 12321 are palindromes.
 *
 * The test cases are generated so that the answer always exists and is in the range [2, 2 * 108].
 */

/**
 * @param {number} n
 * @return {number}
 */
var primePalindrome = function(start) {
  while (true) {
    const numStr = start.toString();
    if (numStr.length % 2 === 0 && start > 11) {
      start = 10 ** Math.ceil(Math.log10(start + 1));
      continue;
    }
    if (!isPalindrome(numStr)) {
      start++;
      continue;
    }
    if (isPrime(start)) return start;
    start++;
  }
};

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num) + 1; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left++] !== str[right--]) return false;
  }
  return true;
}
