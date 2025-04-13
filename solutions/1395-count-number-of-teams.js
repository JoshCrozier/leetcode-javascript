/**
 * 1395. Count Number of Teams
 * https://leetcode.com/problems/count-number-of-teams/
 * Difficulty: Medium
 *
 * There are n soldiers standing in a line. Each soldier is assigned a unique rating value.
 *
 * You have to form a team of 3 soldiers amongst them under the following rules:
 * - Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
 * - A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k])
 *   where (0 <= i < j < k < n).
 *
 * Return the number of teams you can form given the conditions. (soldiers can be part of
 * multiple teams).
 */

/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
  let result = 0;
  const n = rating.length;

  for (let j = 1; j < n - 1; j++) {
    let leftLess = 0;
    let leftGreater = 0;
    let rightLess = 0;
    let rightGreater = 0;

    for (let i = 0; i < j; i++) {
      if (rating[i] < rating[j]) leftLess++;
      else leftGreater++;
    }

    for (let k = j + 1; k < n; k++) {
      if (rating[k] < rating[j]) rightLess++;
      else rightGreater++;
    }

    result += leftLess * rightGreater + leftGreater * rightLess;
  }

  return result;
};
