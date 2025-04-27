/**
 * 1705. Maximum Number of Eaten Apples
 * https://leetcode.com/problems/maximum-number-of-eaten-apples/
 * Difficulty: Medium
 *
 * There is a special kind of apple tree that grows apples every day for n days. On the ith day,
 * the tree grows apples[i] apples that will rot after days[i] days, that is on day i + days[i]
 * the apples will be rotten and cannot be eaten. On some days, the apple tree does not grow any
 * apples, which are denoted by apples[i] == 0 and days[i] == 0.
 *
 * You decided to eat at most one apple a day (to keep the doctors away). Note that you can keep
 * eating after the first n days.
 *
 * Given two integer arrays days and apples of length n, return the maximum number of apples you
 * can eat.
 */

/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function(apples, days) {
  const expiryCounts = new Array(40001).fill(0);
  let result = 0;
  let earliestExpiry = Infinity;
  let maxExpiry = apples.length;

  for (let day = 0; day <= maxExpiry; day++) {
    if (earliestExpiry < day) earliestExpiry = day;

    if (day < apples.length && apples[day]) {
      const expiry = day + days[day] - 1;
      expiryCounts[expiry] += apples[day];
      earliestExpiry = Math.min(expiry, earliestExpiry);
      maxExpiry = Math.max(expiry, maxExpiry);
    }

    while (!expiryCounts[earliestExpiry] && earliestExpiry < maxExpiry) {
      earliestExpiry++;
    }

    if (expiryCounts[earliestExpiry]) {
      result++;
      expiryCounts[earliestExpiry]--;
    }
  }

  return result;
};
