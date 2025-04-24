/**
 * 1652. Defuse the Bomb
 * https://leetcode.com/problems/defuse-the-bomb/
 * Difficulty: Easy
 *
 * You have a bomb to defuse, and your time is running out! Your informer will provide you with
 * a circular array code of length of n and a key k.
 *
 * To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.
 * - If k > 0, replace the ith number with the sum of the next k numbers.
 * - If k < 0, replace the ith number with the sum of the previous k numbers.
 * - If k == 0, replace the ith number with 0.
 *
 * As code is circular, the next element of code[n-1] is code[0], and the previous element of
 * code[0] is code[n-1].
 *
 * Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!
 */

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
  const n = code.length;
  const result = new Array(n).fill(0);

  if (k === 0) return result;

  const isPositive = k > 0;
  const steps = Math.abs(k);

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 1; j <= steps; j++) {
      const index = isPositive ? (i + j) % n : (i - j + n) % n;
      sum += code[index];
    }
    result[i] = sum;
  }

  return result;
};
