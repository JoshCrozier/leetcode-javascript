/**
 * 2141. Maximum Running Time of N Computers
 * https://leetcode.com/problems/maximum-running-time-of-n-computers/
 * Difficulty: Hard
 *
 * You have n computers. You are given the integer n and a 0-indexed integer array batteries
 * where the ith battery can run a computer for batteries[i] minutes. You are interested in
 * running all n computers simultaneously using the given batteries.
 *
 * Initially, you can insert at most one battery into each computer. After that and at any
 * integer time moment, you can remove a battery from a computer and insert another battery
 * any number of times. The inserted battery can be a totally new battery or a battery from
 * another computer. You may assume that the removing and inserting processes take no time.
 *
 * Note that the batteries cannot be recharged.
 *
 * Return the maximum number of minutes you can run all the n computers simultaneously.
 */

/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function(n, batteries) {
  let left = 1;
  let right = Math.floor(batteries.reduce((sum, battery) => sum + battery, 0) / n);

  while (left < right) {
    const mid = Math.floor((left + right + 1) / 2);
    const total = batteries.reduce((sum, battery) => sum + Math.min(battery, mid), 0);

    if (total >= n * mid) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
