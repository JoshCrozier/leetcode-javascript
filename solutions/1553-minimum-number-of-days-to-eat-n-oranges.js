/**
 * 1553. Minimum Number of Days to Eat N Oranges
 * https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/
 * Difficulty: Hard
 *
 * There are n oranges in the kitchen and you decided to eat some of these oranges every day as
 * follows:
 * - Eat one orange.
 * - If the number of remaining oranges n is divisible by 2 then you can eat n / 2 oranges.
 * - If the number of remaining oranges n is divisible by 3 then you can eat 2 * (n / 3) oranges.
 *
 * You can only choose one of the actions per day.
 *
 * Given the integer n, return the minimum number of days to eat n oranges.
 */

/**
 * @param {number} n
 * @return {number}
 */
var minDays = function(n) {
  const memo = new Map();
  return computeMinDays(n);

  function computeMinDays(oranges) {
    if (oranges <= 1) return oranges;
    if (memo.has(oranges)) return memo.get(oranges);

    const eatHalf = computeMinDays(Math.floor(oranges / 2)) + (oranges % 2) + 1;
    const eatTwoThirds = computeMinDays(Math.floor(oranges / 3)) + (oranges % 3) + 1;
    const minDays = Math.min(eatHalf, eatTwoThirds);
    memo.set(oranges, minDays);
    return minDays;
  }
};
