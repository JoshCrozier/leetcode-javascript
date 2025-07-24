/**
 * 3491. Phone Number Prefix
 * https://leetcode.com/problems/phone-number-prefix/
 * Difficulty: Easy
 *
 * You are given a string array numbers that represents phone numbers. Return true if no phone
 * number is a prefix of any other phone number; otherwise, return false.
 */

/**
 * @param {string[]} numbers
 * @return {boolean}
 */
var phonePrefix = function(numbers) {
  numbers.sort();

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i + 1].startsWith(numbers[i])) {
      return false;
    }
  }

  return true;
};
