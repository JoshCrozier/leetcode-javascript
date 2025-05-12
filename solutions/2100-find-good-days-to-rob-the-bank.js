/**
 * 2100. Find Good Days to Rob the Bank
 * https://leetcode.com/problems/find-good-days-to-rob-the-bank/
 * Difficulty: Medium
 *
 * You and a gang of thieves are planning on robbing a bank. You are given a 0-indexed integer
 * array security, where security[i] is the number of guards on duty on the ith day. The days
 * are numbered starting from 0. You are also given an integer time.
 *
 * The ith day is a good day to rob the bank if:
 * - There are at least time days before and after the ith day,
 * - The number of guards at the bank for the time days before i are non-increasing, and
 * - The number of guards at the bank for the time days after i are non-decreasing.
 *
 * More formally, this means day i is a good day to rob the bank if and only if
 * security[i - time] >= security[i - time + 1] >= ... >= security[i]
 * <= ... <= security[i + time - 1] <= security[i + time].
 *
 * Return a list of all days (0-indexed) that are good days to rob the bank. The order that the
 * days are returned in does not matter.
 */

/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function(security, time) {
  const n = security.length;
  const nonIncreasing = new Array(n).fill(0);
  const nonDecreasing = new Array(n).fill(0);
  const result = [];

  for (let i = 1; i < n; i++) {
    if (security[i] <= security[i - 1]) {
      nonIncreasing[i] = nonIncreasing[i - 1] + 1;
    }
    if (security[n - i - 1] <= security[n - i]) {
      nonDecreasing[n - i - 1] = nonDecreasing[n - i] + 1;
    }
  }

  for (let i = time; i < n - time; i++) {
    if (nonIncreasing[i] >= time && nonDecreasing[i] >= time) {
      result.push(i);
    }
  }

  return result;
};
