/**
 * 1842. Next Palindrome Using Same Digits
 * https://leetcode.com/problems/next-palindrome-using-same-digits/
 * Difficulty: Hard
 *
 * You are given a numeric string num, representing a very large palindrome.
 *
 * Return the smallest palindrome larger than num that can be created by rearranging its
 * digits. If no such palindrome exists, return an empty string "".
 *
 * A palindrome is a number that reads the same backward as forward.
 */

/**
 * @param {string} num
 * @return {string}
 */
var nextPalindrome = function(num) {
  const length = num.length;
  const halfLength = Math.floor(length / 2);
  const leftHalf = num.slice(0, halfLength).split('');

  if (!nextPermutation(leftHalf)) {
    return '';
  }

  const rightHalf = leftHalf.slice().reverse();
  const result = leftHalf.join('') + (length % 2 === 1 ? num[halfLength] : '') + rightHalf.join('');

  return result;

  function nextPermutation(digits) {
    let pivot = -1;

    for (let i = digits.length - 2; i >= 0; i--) {
      if (digits[i] < digits[i + 1]) {
        pivot = i;
        break;
      }
    }

    if (pivot === -1) return false;

    for (let i = digits.length - 1; i > pivot; i--) {
      if (digits[i] > digits[pivot]) {
        [digits[pivot], digits[i]] = [digits[i], digits[pivot]];
        break;
      }
    }

    const leftPart = digits.slice(0, pivot + 1);
    const rightPart = digits.slice(pivot + 1).reverse();

    for (let i = 0; i < digits.length; i++) {
      digits[i] = i < leftPart.length ? leftPart[i] : rightPart[i - leftPart.length];
    }

    return true;
  }
};
