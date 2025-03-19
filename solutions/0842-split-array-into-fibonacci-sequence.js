/**
 * 842. Split Array into Fibonacci Sequence
 * https://leetcode.com/problems/split-array-into-fibonacci-sequence/
 * Difficulty: Medium
 *
 * You are given a string of digits num, such as "123456579". We can split it into a Fibonacci-like
 * sequence [123, 456, 579].
 *
 * Formally, a Fibonacci-like sequence is a list f of non-negative integers such that:
 * - 0 <= f[i] < 231, (that is, each integer fits in a 32-bit signed integer type),
 * - f.length >= 3, and
 * - f[i] + f[i + 1] == f[i + 2] for all 0 <= i < f.length - 2.
 *
 * Note that when splitting the string into pieces, each piece must not have extra leading zeroes,
 * except if the piece is the number 0 itself.
 *
 * Return any Fibonacci-like sequence split from num, or return [] if it cannot be done.
 */

/**
 * @param {string} num
 * @return {number[]}
 */
var splitIntoFibonacci = function(num) {
  const result = [];
  const MAX_INT = 2 ** 31 - 1;
  backtrack(0);
  return result;

  function backtrack(index) {
    if (index === num.length && result.length >= 3) return true;
    for (let length = 1; length <= num.length - index; length++) {
      if (num[index] === '0' && length > 1) break;
      const current = parseInt(num.substring(index, index + length));
      if (current > MAX_INT) break;
      if (result.length >= 2) {
        const sum = result[result.length - 1] + result[result.length - 2];
        if (current > sum) break;
        if (current < sum) continue;
      }
      result.push(current);
      if (backtrack(index + length)) return true;
      result.pop();
    }
    return false;
  }
};
