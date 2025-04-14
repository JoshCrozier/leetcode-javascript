/**
 * 1423. Maximum Points You Can Obtain from Cards
 * https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
 * Difficulty: Medium
 *
 * There are several cards arranged in a row, and each card has an associated number of
 * points. The points are given in the integer array cardPoints.
 *
 * In one step, you can take one card from the beginning or from the end of the row.
 * You have to take exactly k cards.
 *
 * Your score is the sum of the points of the cards you have taken.
 *
 * Given the integer array cardPoints and the integer k, return the maximum score you can obtain.
 */

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  const totalLength = cardPoints.length;
  const windowSize = totalLength - k;
  let windowSum = cardPoints.slice(0, windowSize).reduce((sum, num) => sum + num, 0);
  let minWindowSum = windowSum;
  const totalSum = cardPoints.reduce((sum, num) => sum + num, 0);

  for (let i = windowSize; i < totalLength; i++) {
    windowSum = windowSum + cardPoints[i] - cardPoints[i - windowSize];
    minWindowSum = Math.min(minWindowSum, windowSum);
  }

  return totalSum - minWindowSum;
};
