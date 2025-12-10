/**
 * 3577. Count the Number of Computer Unlocking Permutations
 * https://leetcode.com/problems/count-the-number-of-computer-unlocking-permutations/
 * Difficulty: Medium
 *
 * You are given an array complexity of length n.
 *
 * There are n locked computers in a room with labels from 0 to n - 1, each with its own
 * unique password. The password of the computer i has a complexity complexity[i].
 *
 * The password for the computer labeled 0 is already decrypted and serves as the root.
 * All other computers must be unlocked using it or another previously unlocked computer,
 * following this information:
 * - You can decrypt the password for the computer i using the password for computer j,
 *   where j is any integer less than i with a lower complexity. (i.e. j < i and
 *   complexity[j] < complexity[i])
 * - To decrypt the password for computer i, you must have already unlocked a computer j
 *   such that j < i and complexity[j] < complexity[i].
 *
 * Find the number of permutations of [0, 1, 2, ..., (n - 1)] that represent a valid order
 * in which the computers can be unlocked, starting from computer 0 as the only initially
 * unlocked one.
 *
 * Since the answer may be large, return it modulo 109 + 7.
 *
 * Note that the password for the computer with label 0 is decrypted, and not the computer
 * with the first position in the permutation.
 */

/**
 * @param {number[]} complexity
 * @return {number}
 */
var countPermutations = function(complexity) {
  const MOD = 1e9 + 7;
  const root = complexity[0];

  for (let i = 1; i < complexity.length; i++) {
    if (complexity[i] <= root) {
      return 0;
    }
  }

  let result = 1;
  for (let i = 2; i < complexity.length; i++) {
    result = (result * i) % MOD;
  }

  return result;
};
