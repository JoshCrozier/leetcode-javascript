/**
 * 2197. Replace Non-Coprime Numbers in Array
 * https://leetcode.com/problems/replace-non-coprime-numbers-in-array/
 * Difficulty: Hard
 *
 * You are given an array of integers nums. Perform the following steps:
 * 1. Find any two adjacent numbers in nums that are non-coprime.
 * 2. If no such numbers are found, stop the process.
 * 3. Otherwise, delete the two numbers and replace them with their LCM (Least Common Multiple).
 * 4. Repeat this process as long as you keep finding two adjacent non-coprime numbers.
 *
 * Return the final modified array. It can be shown that replacing adjacent non-coprime numbers in
 * any arbitrary order will lead to the same result.
 *
 * The test cases are generated such that the values in the final array are less than or equal to
 * 108.
 *
 * Two values x and y are non-coprime if GCD(x, y) > 1 where GCD(x, y) is the Greatest Common
 * Divisor of x and y.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var replaceNonCoprimes = function(nums) {
  const result = [];

  for (let num of nums) {
    while (result.length > 0) {
      const last = result[result.length - 1];
      const gcdValue = gcd(last, num);
      if (gcdValue === 1) break;
      result.pop();
      num = (last / gcdValue) * num;
    }
    result.push(num);
  }

  return result;
};

function gcd(a, b) {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}
