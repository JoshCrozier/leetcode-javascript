/**
 * 2028. Find Missing Observations
 * https://leetcode.com/problems/find-missing-observations/
 * Difficulty: Medium
 *
 * You have observations of n + m 6-sided dice rolls with each face numbered from 1 to 6. n
 * of the observations went missing, and you only have the observations of m rolls.
 * Fortunately, you have also calculated the average value of the n + m rolls.
 *
 * You are given an integer array rolls of length m where rolls[i] is the value of the ith
 * observation. You are also given the two integers mean and n.
 *
 * Return an array of length n containing the missing observations such that the average
 * value of the n + m rolls is exactly mean. If there are multiple valid answers, return
 * any of them. If no such array exists, return an empty array.
 *
 * The average value of a set of k numbers is the sum of the numbers divided by k.
 *
 * Note that mean is an integer, so the sum of the n + m rolls should be divisible by n + m.
 */

/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
  const totalRolls = rolls.length + n;
  const targetSum = mean * totalRolls;
  const currentSum = rolls.reduce((sum, roll) => sum + roll, 0);
  const missingSum = targetSum - currentSum;

  if (missingSum < n || missingSum > 6 * n) return [];

  const baseValue = Math.floor(missingSum / n);
  const remainder = missingSum % n;
  const result = [];

  for (let i = 0; i < n; i++) {
    if (i < remainder) {
      result.push(baseValue + 1);
    } else {
      result.push(baseValue);
    }
  }

  return result;
};
