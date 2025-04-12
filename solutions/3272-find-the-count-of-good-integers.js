/**
 * 3272. Find the Count of Good Integers
 * https://leetcode.com/problems/find-the-count-of-good-integers/
 * Difficulty: Hard
 *
 * You are given two positive integers n and k.
 *
 * An integer x is called k-palindromic if:
 * - x is a palindrome.
 * - x is divisible by k.
 *
 * An integer is called good if its digits can be rearranged to form a k-palindromic integer.
 * For example, for k = 2, 2020 can be rearranged to form the k-palindromic integer 2002,
 * whereas 1010 cannot be rearranged to form a k-palindromic integer.
 *
 * Return the count of good integers containing n digits.
 *
 * Note that any integer must not have leading zeros, neither before nor after rearrangement.
 * For example, 1010 cannot be rearranged to form 101.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function countGoodIntegers(n, k) {
  if (n === 1) return Math.floor(9 / k);

  let result = 0;
  const halfLength = Math.ceil(n / 2);
  const start = Math.pow(10, halfLength - 1);
  const end = Math.pow(10, halfLength);

  const seen = new Set();
  for (let i = start; i < end; i++) {
    const palindromeStr = generatePalindrome(i);
    if (palindromeStr.length !== n) continue;
    const num = parseInt(palindromeStr);
    if (num % k !== 0) continue;

    const sortedDigits = palindromeStr.split('').sort().join('');
    if (seen.has(sortedDigits)) continue;
    seen.add(sortedDigits);

    result += calculateArrangements(palindromeStr);
  }

  return result;

  function generatePalindrome(firstHalf) {
    const str = firstHalf.toString();
    const isOdd = n % 2 === 1;
    return isOdd
      ? str + str.slice(0, -1).split('').reverse().join('')
      : str + str.split('').reverse().join('');
  }

  function calculateArrangements(numStr) {
    const freq = new Map();
    for (const digit of numStr) {
      freq.set(digit, (freq.get(digit) || 0) + 1);
    }
    const total = multinomial(n, freq);
    if (!freq.has('0')) return total;

    freq.set('0', freq.get('0') - 1);
    if (freq.get('0') === 0) freq.delete('0');
    return total - multinomial(n - 1, freq);
  }

  function multinomial(length, freq) {
    const numerator = factorial(length);
    let denominator = 1;
    for (const count of freq.values()) {
      denominator *= factorial(count);
    }
    return numerator / denominator;
  }

  function factorial(num) {
    let res = 1;
    for (let i = 2; i <= num; i++) res *= i;
    return res;
  }
}
