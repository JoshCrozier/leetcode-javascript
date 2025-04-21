/**
 * 1601. Maximum Number of Achievable Transfer Requests
 * https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/
 * Difficulty: Hard
 *
 * We have n buildings numbered from 0 to n - 1. Each building has a number of employees.
 * It's transfer season, and some employees want to change the building they reside in.
 *
 * You are given an array requests where requests[i] = [fromi, toi] represents an employee's
 * request to transfer from building fromi to building toi.
 *
 * All buildings are full, so a list of requests is achievable only if for each building, the
 * net change in employee transfers is zero. This means the number of employees leaving is
 * equal to the number of employees moving in. For example if n = 3 and two employees are
 * leaving building 0, one is leaving building 1, and one is leaving building 2, there should
 * be two employees moving to building 0, one employee moving to building 1, and one employee
 * moving to building 2.
 *
 * Return the maximum number of achievable requests.
 */

/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function(n, requests) {
  let maxAchievable = 0;
  tryCombination(0, 0, new Array(n).fill(0));
  return maxAchievable;

  function tryCombination(index, count, balance) {
    if (index === requests.length) {
      if (balance.every(val => val === 0)) {
        maxAchievable = Math.max(maxAchievable, count);
      }
      return;
    }

    const [from, to] = requests[index];
    balance[from]--;
    balance[to]++;
    tryCombination(index + 1, count + 1, balance);
    balance[from]++;
    balance[to]--;

    tryCombination(index + 1, count, balance);
  }
};
