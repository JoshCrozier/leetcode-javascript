/**
 * 1088. Confusing Number II
 * https://leetcode.com/problems/confusing-number-ii/
 * Difficulty: Hard
 *
 * A confusing number is a number that when rotated 180 degrees becomes a different number
 * with each digit valid.
 *
 * We can rotate digits of a number by 180 degrees to form new digits.
 * - When 0, 1, 6, 8, and 9 are rotated 180 degrees, they become 0, 1, 9, 8, and 6 respectively.
 * - When 2, 3, 4, 5, and 7 are rotated 180 degrees, they become invalid.
 *
 * Note that after rotating a number, we can ignore leading zeros.
 * - For example, after rotating 8000, we have 0008 which is considered as just 8.
 *
 * Given an integer n, return the number of confusing numbers in the inclusive range [1, n].
 */

/**
 * @param {number} n
 * @return {number}
 */
var confusingNumberII = function(n) {
  const validDigits = [0, 1, 6, 8, 9];
  const rotationMap = { 0: 0, 1: 1, 6: 9, 8: 8, 9: 6 };
  let count = 0;

  const maxLength = n.toString().length;

  for (let len = 1; len <= maxLength; len++) {
    dfs(0, 0, len);
  }

  return count;

  function isConfusing(num) {
    const original = num;
    let rotated = 0;

    while (num > 0) {
      const digit = num % 10;
      rotated = rotated * 10 + rotationMap[digit];
      num = Math.floor(num / 10);
    }

    return original !== rotated;
  }

  function dfs(current, length, targetLength) {
    if (length === targetLength) {
      if (current <= n && current > 0 && isConfusing(current)) {
        count++;
      }
      return;
    }

    for (const digit of validDigits) {
      if (current === 0 && digit === 0) continue;
      const next = current * 10 + digit;
      if (next > n) break;
      dfs(next, length + 1, targetLength);
    }
  }
};
