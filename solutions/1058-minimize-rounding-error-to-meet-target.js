/**
 * 1058. Minimize Rounding Error to Meet Target
 * https://leetcode.com/problems/minimize-rounding-error-to-meet-target/
 * Difficulty: Medium
 *
 * Given an array of prices [p1,p2...,pn] and a target, round each price pi to Roundi(pi) so
 * that the rounded array [Round1(p1),Round2(p2)...,Roundn(pn)] sums to the given target.
 * Each operation Roundi(pi) could be either Floor(pi) or Ceil(pi).
 *
 * Return the string "-1" if the rounded array is impossible to sum to target. Otherwise,
 * return the smallest rounding error, which is defined as Σ |Roundi(pi) - (pi)| for i from
 * 1 to n, as a string with three places after the decimal.
 */

/**
 * @param {string[]} prices
 * @param {number} target
 * @return {string}
 */
var minimizeError = function(prices, target) {
  const nums = prices.map(p => parseFloat(p));
  const floors = nums.map(n => Math.floor(n));
  const ceils = nums.map(n => Math.ceil(n));

  const minSum = floors.reduce((sum, f) => sum + f, 0);
  const maxSum = ceils.reduce((sum, c) => sum + c, 0);

  if (target < minSum || target > maxSum) {
    return '-1';
  }

  const ceilsNeeded = target - minSum;

  const items = nums.map((n, i) => ({
    floorError: n - floors[i],
    ceilError: ceils[i] - n,
    diff: (ceils[i] - n) - (n - floors[i])
  }));

  items.sort((a, b) => a.diff - b.diff);

  let totalError = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i < ceilsNeeded) {
      totalError += items[i].ceilError;
    } else {
      totalError += items[i].floorError;
    }
  }

  return totalError.toFixed(3);
};
