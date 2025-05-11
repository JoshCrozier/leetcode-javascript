/**
 * 2081. Sum of k-Mirror Numbers
 * https://leetcode.com/problems/sum-of-k-mirror-numbers/
 * Difficulty: Hard
 *
 * A k-mirror number is a positive integer without leading zeros that reads the same both forward
 * and backward in base-10 as well as in base-k.
 * - For example, 9 is a 2-mirror number. The representation of 9 in base-10 and base-2 are 9 and
 *   1001 respectively, which read the same both forward and backward.
 * - On the contrary, 4 is not a 2-mirror number. The representation of 4 in base-2 is 100, which
 *   does not read the same both forward and backward.
 *
 * Given the base k and the number n, return the sum of the n smallest k-mirror numbers.
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var kMirror = function(k, n) {
  const kMirrorNumbers = [];
  let sum = 0;
  let length = 1;

  while (kMirrorNumbers.length < n) {
    generatePalindromes(length).forEach(num => {
      if (kMirrorNumbers.length < n && isKMirror(num, k)) {
        kMirrorNumbers.push(num);
        sum += num;
      }
    });
    length++;
  }

  return sum;
};

function toBaseK(num, k) {
  if (num === 0) return '0';

  let result = '';
  while (num > 0) {
    result = (num % k) + result;
    num = Math.floor(num / k);
  }

  return result;
}

function isKMirror(num, k) {
  const baseKRepresentation = toBaseK(num, k);
  return isPalindrome(baseKRepresentation);
}

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}

function generatePalindromes(length) {
  const palindromes = [];

  if (length === 1) {
    for (let i = 1; i <= 9; i++) {
      palindromes.push(i);
    }
    return palindromes;
  }

  if (length % 2 === 0) {
    const half = length / 2;
    const start = Math.pow(10, half - 1);
    const end = Math.pow(10, half) - 1;

    for (let i = start; i <= end; i++) {
      const firstHalf = i.toString();
      const secondHalf = firstHalf.split('').reverse().join('');
      palindromes.push(parseInt(firstHalf + secondHalf));
    }
  } else {
    const half = Math.floor(length / 2);
    const start = Math.pow(10, half);
    const end = Math.pow(10, half + 1) - 1;

    for (let i = start; i <= end; i++) {
      const withoutMiddle = Math.floor(i / 10);
      const middle = i % 10;
      const firstHalf = withoutMiddle.toString();
      const secondHalf = firstHalf.split('').reverse().join('');
      palindromes.push(parseInt(firstHalf + middle + secondHalf));
    }
  }

  return palindromes;
}

