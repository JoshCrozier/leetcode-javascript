/**
 * 1176. Diet Plan Performance
 * https://leetcode.com/problems/diet-plan-performance/
 * Difficulty: Easy
 *
 * A dieter consumes calories[i] calories on the i-th day.
 *
 * Given an integer k, for every consecutive sequence of k days
 * (calories[i], calories[i+1], ..., calories[i+k-1] for all 0 <= i <= n-k),
 * they look at T, the total calories consumed during that sequence of k days
 * (calories[i] + calories[i+1] + ... + calories[i+k-1]):
 * - If T < lower, they performed poorly on their diet and lose 1 point;
 * - If T > upper, they performed well on their diet and gain 1 point;
 * - Otherwise, they performed normally and there is no change in points.
 *
 * Initially, the dieter has zero points. Return the total number of points the dieter
 * has after dieting for calories.length days.
 *
 * Note that the total points can be negative.
 */

/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var dietPlanPerformance = function(calories, k, lower, upper) {
  let windowSum = 0;
  let points = 0;

  for (let i = 0; i < k; i++) {
    windowSum += calories[i];
  }

  if (windowSum < lower) points--;
  else if (windowSum > upper) points++;

  for (let i = k; i < calories.length; i++) {
    windowSum = windowSum - calories[i - k] + calories[i];

    if (windowSum < lower) points--;
    else if (windowSum > upper) points++;
  }

  return points;
};
