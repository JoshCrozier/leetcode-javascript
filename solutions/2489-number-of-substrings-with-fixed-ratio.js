/**
 * 2489. Number of Substrings With Fixed Ratio
 * https://leetcode.com/problems/number-of-substrings-with-fixed-ratio/
 * Difficulty: Medium
 *
 * You are given a binary string s, and two integers num1 and num2. num1 and num2 are
 * coprime numbers.
 *
 * A ratio substring is a substring of s where the ratio between the number of 0's and
 * the number of 1's in the substring is exactly num1 : num2.
 * - For example, if num1 = 2 and num2 = 3, then "01011" and "1110000111" are ratio substrings,
 *   while "11000" is not.
 *
 * Return the number of non-empty ratio substrings of s.
 *
 * Note that:
 * - A substring is a contiguous sequence of characters within a string.
 * - Two values x and y are coprime if gcd(x, y) == 1 where gcd(x, y) is the greatest common
 *   divisor of x and y.
 */

/**
 * @param {string} s
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var fixedRatio = function(s, num1, num2) {
  const n = s.length;
  const map = new Map();
  map.set(0, 1);

  let zeros = 0;
  let ones = 0;
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === '0') {
      zeros++;
    } else {
      ones++;
    }

    const difference = ones * num1 - zeros * num2;

    if (map.has(difference)) {
      result += map.get(difference);
    }

    map.set(difference, (map.get(difference) || 0) + 1);
  }

  return result;
};
