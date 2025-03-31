/**
 * 1014. Best Sightseeing Pair
 * https://leetcode.com/problems/best-sightseeing-pair/
 * Difficulty: Medium
 *
 * You are given an integer array values where values[i] represents the value of the ith sightseeing
 * spot. Two sightseeing spots i and j have a distance j - i between them.
 *
 * The score of a pair (i < j) of sightseeing spots is values[i] + values[j] + i - j: the sum of the
 * values of the sightseeing spots, minus the distance between them.
 *
 * Return the maximum score of a pair of sightseeing spots.
 */

/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
  let maxLeft = values[0];
  let result = 0;

  for (let j = 1; j < values.length; j++) {
    result = Math.max(result, maxLeft + values[j] - j);
    maxLeft = Math.max(maxLeft, values[j] + j);
  }

  return result;
};
