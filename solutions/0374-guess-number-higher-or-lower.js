/**
 * 374. Guess Number Higher or Lower
 * https://leetcode.com/problems/guess-number-higher-or-lower/
 * Difficulty: Medium
 *
 * We are playing the Guess Game. The game is as follows:
 *
 * I pick a number from 1 to n. You have to guess which number I picked.
 *
 * Every time you guess wrong, I will tell you whether the number I picked is higher
 * or lower than your guess.
 *
 * You call a pre-defined API int guess(int num), which returns 3 possible results:
 * - -1: The number I picked is lower than your guess (i.e. pick < num).
 * - 1: The number I picked is higher than your guess (i.e. pick > num).
 * - 0: The number I picked is equal to your guess (i.e. pick == num).
 *
 * Return the number that I picked.
 */

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    const pivot = Math.floor((right + left) / 2);
    switch (guess(pivot)) {
      case -1: right = pivot - 1; break;
      case 1: left = pivot + 1; break;
      case 0: return pivot;
    }
  }
};
