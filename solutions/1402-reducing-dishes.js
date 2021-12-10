/**
 * 1402. Reducing Dishes
 * https://leetcode.com/problems/reducing-dishes/
 * Difficulty: Hard
 *
 * A chef has collected data on the satisfaction level of his n dishes.
 * Chef can cook any dish in 1 unit of time.
 *
 * Like-time coefficient of a dish is defined as the time taken to cook
 * that dish including previous dishes multiplied by its satisfaction
 * level i.e. time[i] * satisfaction[i].
 *
 * Return the maximum sum of like-time coefficient that the chef can
 * obtain after dishes preparation.
 *
 * Dishes can be prepared in any order and the chef can discard some
 * dishes to get this maximum value.
 */

/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
  let max = 0;

  satisfaction.sort((a, b) => a - b);

  while (satisfaction.length) {
    max = Math.max(
      max,
      satisfaction.reduce((total, n, i) => total + n * (i + 1), 0)
    );
    satisfaction.shift();
  }

  return max;
};
