/**
 * 299. Bulls and Cows
 * https://leetcode.com/problems/bulls-and-cows/
 * Difficulty: Medium
 *
 * You are playing the Bulls and Cows game with your friend.
 *
 * You write down a secret number and ask your friend to guess what the number is.
 * When your friend makes a guess, you provide a hint with the following info:
 * - The number of "bulls", which are digits in the guess that are in the correct position.
 * - The number of "cows", which are digits in the guess that are in your secret number but
 *   are located in the wrong position. Specifically, the non-bull digits in the guess that
 *   could be rearranged such that they become bulls.
 *
 * Given the secret number secret and your friend's guess guess, return the hint for your
 * friend's guess.
 *
 * The hint should be formatted as "xAyB", where x is the number of bulls and y is the number
 * of cows. Note that both secret and guess may contain duplicate digits.
 */

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  const map = Array(10).fill(0);
  let a = 0;
  let b = 0;

  for (const i in secret) {
    if (secret[i] === guess[i]) {
      a++;
    } else {
      map[secret[i]]++;
      map[guess[i]]--;
      b += map[secret[i]] <= 0;
      b += map[guess[i]] >= 0;
    }
  }

  return `${a}A${b}B`;
};
