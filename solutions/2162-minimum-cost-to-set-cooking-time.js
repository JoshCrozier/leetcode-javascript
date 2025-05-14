/**
 * 2162. Minimum Cost to Set Cooking Time
 * https://leetcode.com/problems/minimum-cost-to-set-cooking-time/
 * Difficulty: Medium
 *
 * A generic microwave supports cooking times for:
 * - at least 1 second.
 * - at most 99 minutes and 99 seconds.
 *
 * To set the cooking time, you push at most four digits. The microwave normalizes what you push
 * as four digits by prepending zeroes. It interprets the first two digits as the minutes and
 * the last two digits as the seconds. It then adds them up as the cooking time. For example,
 * - You push 9 5 4 (three digits). It is normalized as 0954 and interpreted as 9 minutes and
 *   54 seconds.
 * - You push 0 0 0 8 (four digits). It is interpreted as 0 minutes and 8 seconds.
 * - You push 8 0 9 0. It is interpreted as 80 minutes and 90 seconds.
 * - You push 8 1 3 0. It is interpreted as 81 minutes and 30 seconds.
 *
 * You are given integers startAt, moveCost, pushCost, and targetSeconds. Initially, your finger
 * is on the digit startAt. Moving the finger above any specific digit costs moveCost units of
 * fatigue. Pushing the digit below the finger once costs pushCost units of fatigue.
 *
 * There can be multiple ways to set the microwave to cook for targetSeconds seconds but you are
 * interested in the way with the minimum cost.
 *
 * Return the minimum cost to set targetSeconds seconds of cooking time.
 *
 * Remember that one minute consists of 60 seconds.
 */

/**
 * @param {number} startAt
 * @param {number} moveCost
 * @param {number} pushCost
 * @param {number} targetSeconds
 * @return {number}
 */
var minCostSetTime = function(startAt, moveCost, pushCost, targetSeconds) {
  const minutes1 = Math.floor(targetSeconds / 60);
  const seconds1 = targetSeconds % 60;
  let result = Infinity;

  if (minutes1 <= 99) {
    const digits1 = getDigits(minutes1, seconds1);
    result = Math.min(result, calculateCost(digits1));
  }

  const minutes2 = Math.floor(targetSeconds / 60) - 1;
  const seconds2 = targetSeconds % 60 + 60;
  if (minutes2 >= 0 && minutes2 <= 99 && seconds2 <= 99) {
    const digits2 = getDigits(minutes2, seconds2);
    result = Math.min(result, calculateCost(digits2));
  }

  return result;

  function calculateCost(digits) {
    let totalCost = 0;
    let currentDigit = startAt;

    for (const digit of digits) {
      if (digit !== currentDigit) {
        totalCost += moveCost;
        currentDigit = digit;
      }
      totalCost += pushCost;
    }

    return totalCost;
  }

  function getDigits(minutes, seconds) {
    const result = [];

    if (minutes > 0) {
      if (minutes >= 10) {
        result.push(Math.floor(minutes / 10));
      }
      result.push(minutes % 10);
    }

    if (minutes > 0 || seconds >= 10) {
      result.push(Math.floor(seconds / 10));
    }

    result.push(seconds % 10);

    return result;
  }
};
