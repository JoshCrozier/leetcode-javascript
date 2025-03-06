/**
 * 564. Find the Closest Palindrome
 * https://leetcode.com/problems/find-the-closest-palindrome/
 * Difficulty: Hard
 *
 * Given a string n representing an integer, return the closest integer (not including itself),
 * which is a palindrome. If there is a tie, return the smaller one.
 *
 * The closest is defined as the absolute difference minimized between two integers.
 */

/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {
  const num = BigInt(n);

  if (num <= 10n) return String(num - 1n);
  if (num === 11n) return '9';
  if (n === '1' + '0'.repeat(n.length - 1)) return String(num - 1n);
  if (n === '9'.repeat(n.length)) return String(num + 2n);

  const leftHalf = n.slice(0, Math.ceil(n.length / 2));
  const leftNum = BigInt(leftHalf);
  const candidates = [
    String(10n ** BigInt(n.length - 1) - 1n),
    createPalindrome(leftNum - 1n, n.length),
    createPalindrome(leftNum, n.length),
    createPalindrome(leftNum + 1n, n.length),
    String(10n ** BigInt(n.length) + 1n)
  ].filter(x => x !== n);

  return candidates.reduce((min, curr) => {
    const currDiff = BigInt(curr) > num ? BigInt(curr) - num : num - BigInt(curr);
    const minDiff = BigInt(min) > num ? BigInt(min) - num : num - BigInt(min);
    return currDiff < minDiff
      ? curr
      : currDiff === minDiff
        ? (curr < min ? curr : min)
        : min;
  });

  function createPalindrome(left, length) {
    const s = String(left);
    return length % 2 === 0
      ? s + s.split('').reverse().join('')
      : s + s.slice(0, -1).split('').reverse().join('');
  }
};
