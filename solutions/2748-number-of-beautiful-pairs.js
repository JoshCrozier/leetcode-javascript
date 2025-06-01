/**
 * 2748. Number of Beautiful Pairs
 * https://leetcode.com/problems/number-of-beautiful-pairs/
 * Difficulty: Easy
 *
 * You are given a 0-indexed integer array nums. A pair of indices i, j where
 * 0 <= i < j < nums.length is called beautiful if the first digit of nums[i] and
 * the last digit of nums[j] are coprime.
 *
 * Return the total number of beautiful pairs in nums.
 *
 * Two integers x and y are coprime if there is no integer greater than 1 that divides
 * both of them. In other words, x and y are coprime if gcd(x, y) == 1, where gcd(x, y)
 * is the greatest common divisor of x and y.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function(nums) {
  let result = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const first = getFirstDigit(nums[i]);
      const last = getLastDigit(nums[j]);
      if (gcd(first, last) === 1) {
        result++;
      }
    }
  }

  return result;

  function gcd(a, b) {
    while (b) {
      a %= b;
      [a, b] = [b, a];
    }
    return a;
  }

  function getFirstDigit(num) {
    while (num >= 10) {
      num = Math.floor(num / 10);
    }
    return num;
  }

  function getLastDigit(num) {
    return num % 10;
  }
};
