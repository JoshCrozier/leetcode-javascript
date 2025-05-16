/**
 * 2212. Maximum Points in an Archery Competition
 * https://leetcode.com/problems/maximum-points-in-an-archery-competition/
 * Difficulty: Medium
 *
 * Alice and Bob are opponents in an archery competition. The competition has set the
 * following rules:
 * 1. Alice first shoots numArrows arrows and then Bob shoots numArrows arrows.
 * 2. The points are then calculated as follows:
 *    1. The target has integer scoring sections ranging from 0 to 11 inclusive.
 *    2. For each section of the target with score k (in between 0 to 11), say Alice and Bob have
 *       shot ak and bk arrows on that section respectively. If ak >= bk, then Alice takes k points.
 *       If ak < bk, then Bob takes k points.
 *    3. However, if ak == bk == 0, then nobody takes k points.
 * - For example, if Alice and Bob both shot 2 arrows on the section with score 11, then Alice takes
 *   11 points. On the other hand, if Alice shot 0 arrows on the section with score 11 and Bob shot
 *   2 arrows on that same section, then Bob takes 11 points.
 *
 * You are given the integer numArrows and an integer array aliceArrows of size 12, which represents
 * the number of arrows Alice shot on each scoring section from 0 to 11. Now, Bob wants to maximize
 * the total number of points he can obtain.
 *
 * Return the array bobArrows which represents the number of arrows Bob shot on each scoring section
 * from 0 to 11. The sum of the values in bobArrows should equal numArrows.
 *
 * If there are multiple ways for Bob to earn the maximum total points, return any one of them.
 */

/**
 * @param {number} numArrows
 * @param {number[]} aliceArrows
 * @return {number[]}
 */
var maximumBobPoints = function(numArrows, aliceArrows) {
  let maxScore = 0;
  let bestConfig = new Array(12).fill(0);

  backtrack(1, numArrows, 0, new Array(12).fill(0));
  return bestConfig;

  function backtrack(index, arrowsLeft, score, config) {
    if (index === 12 || arrowsLeft === 0) {
      if (score > maxScore) {
        maxScore = score;
        bestConfig = [...config];
        bestConfig[0] += arrowsLeft;
      }
      return;
    }

    const needed = aliceArrows[index] + 1;
    if (arrowsLeft >= needed) {
      config[index] = needed;
      backtrack(index + 1, arrowsLeft - needed, score + index, config);
      config[index] = 0;
    }

    backtrack(index + 1, arrowsLeft, score, config);
  }
};
