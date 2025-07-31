/**
 * 2335. Minimum Amount of Time to Fill Cups
 * https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/
 * Difficulty: Easy
 *
 * You have a water dispenser that can dispense cold, warm, and hot water. Every second, you
 * can either fill up 2 cups with different types of water, or 1 cup of any type of water.
 *
 * You are given a 0-indexed integer array amount of length 3 where amount[0], amount[1], and
 * amount[2] denote the number of cold, warm, and hot water cups you need to fill respectively.
 * Return the minimum number of seconds needed to fill up all the cups.
 */

/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
  const [a, b, c] = amount.sort((x, y) => y - x);
  return Math.max(a, Math.ceil((a + b + c) / 2));
};
