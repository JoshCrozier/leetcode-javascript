/**
 * 2178. Maximum Split of Positive Even Integers
 * https://leetcode.com/problems/maximum-split-of-positive-even-integers/
 * Difficulty: Medium
 *
 * You are given an integer finalSum. Split it into a sum of a maximum number of unique
 * positive even integers.
 * - For example, given finalSum = 12, the following splits are valid (unique positive even
 *   integers summing up to finalSum): (12), (2 + 10), (2 + 4 + 6), and (4 + 8). Among them,
 *   (2 + 4 + 6) contains the maximum number of integers. Note that finalSum cannot be split
 *   into (2 + 2 + 4 + 4) as all the numbers should be unique.
 *
 * Return a list of integers that represent a valid split containing a maximum number of
 * integers. If no valid split exists for finalSum, return an empty list. You may return
 * the integers in any order.
 */

/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function(finalSum) {
  if (finalSum % 2 !== 0) return [];

  const result = [];
  let current = 2;
  let remaining = finalSum;

  while (remaining >= current) {
    if (remaining - current <= current) {
      result.push(remaining);
      return result;
    }
    result.push(current);
    remaining -= current;
    current += 2;
  }

  return result;
};
