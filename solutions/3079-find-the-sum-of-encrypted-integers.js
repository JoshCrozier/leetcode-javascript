/**
 * 3079. Find the Sum of Encrypted Integers
 * https://leetcode.com/problems/find-the-sum-of-encrypted-integers/
 * Difficulty: Easy
 *
 * You are given an integer array nums containing positive integers. We define a function
 * encrypt such that encrypt(x) replaces every digit in x with the largest digit in x.
 * For example, encrypt(523) = 555 and encrypt(213) = 333.
 *
 * Return the sum of encrypted elements.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
  let result = 0;

  for (const num of nums) {
    let maxDigit = 0;
    let temp = num;
    let digitCount = 0;

    while (temp > 0) {
      maxDigit = Math.max(maxDigit, temp % 10);
      temp = Math.floor(temp / 10);
      digitCount++;
    }

    let encrypted = 0;
    while (digitCount > 0) {
      encrypted = encrypted * 10 + maxDigit;
      digitCount--;
    }

    result += encrypted;
  }

  return result;
};
