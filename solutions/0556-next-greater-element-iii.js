/**
 * 556. Next Greater Element III
 * https://leetcode.com/problems/next-greater-element-iii/
 * Difficulty: Medium
 *
 * Given a positive integer n, find the smallest integer which has exactly the same digits existing
 * in the integer n and is greater in value than n. If no such positive integer exists, return -1.
 *
 * Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it
 * does not fit in 32-bit integer, return -1.
 */

/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
  const digits = [...String(n)];
  let i = digits.length - 2;

  while (i >= 0 && digits[i] >= digits[i + 1]) i--;
  if (i < 0) return -1;

  let j = digits.length - 1;
  while (j >= 0 && digits[j] <= digits[i]) j--;

  [digits[i], digits[j]] = [digits[j], digits[i]];
  let left = i + 1;
  let right = digits.length - 1;
  while (left < right) {
    [digits[left], digits[right]] = [digits[right], digits[left]];
    left++;
    right--;
  }

  const result = +digits.join('');
  return result > n && result <= 2**31 - 1 ? result : -1;
};
