/**
 * 2136. Earliest Possible Day of Full Bloom
 * https://leetcode.com/problems/earliest-possible-day-of-full-bloom/
 * Difficulty: Hard
 *
 * You have n flower seeds. Every seed must be planted first before it can begin to grow, then
 * bloom. Planting a seed takes time and so does the growth of a seed. You are given two 0-indexed
 * integer arrays plantTime and growTime, of length n each:
 * - plantTime[i] is the number of full days it takes you to plant the ith seed. Every day, you can
 *   work on planting exactly one seed. You do not have to work on planting the same seed on
 *   consecutive days, but the planting of a seed is not complete until you have worked plantTime[i]
 *   days on planting it in total.
 * - growTime[i] is the number of full days it takes the ith seed to grow after being completely
 *   planted. After the last day of its growth, the flower blooms and stays bloomed forever.
 *
 * From the beginning of day 0, you can plant the seeds in any order.
 *
 * Return the earliest possible day where all seeds are blooming.
 */

/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function(plantTime, growTime) {
  const seeds = plantTime.map((plant, index) => ({ plant, grow: growTime[index] }));
  seeds.sort((a, b) => b.grow - a.grow);

  let plantingDays = 0;
  let result = 0;

  for (const { plant, grow } of seeds) {
    plantingDays += plant;
    result = Math.max(result, plantingDays + grow);
  }

  return result;
};
