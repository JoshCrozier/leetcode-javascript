/**
 * 1953. Maximum Number of Weeks for Which You Can Work
 * https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/
 * Difficulty: Medium
 *
 * There are n projects numbered from 0 to n - 1. You are given an integer array milestones where
 * each milestones[i] denotes the number of milestones the ith project has.
 *
 * You can work on the projects following these two rules:
 * - Every week, you will finish exactly one milestone of one project. You must work every week.
 * - You cannot work on two milestones from the same project for two consecutive weeks.
 * - Once all the milestones of all the projects are finished, or if the only milestones that you
 *   can work on will cause you to violate the above rules, you will stop working. Note that you
 *   may not be able to finish every project's milestones due to these constraints.
 *
 * Return the maximum number of weeks you would be able to work on the projects without violating
 * the rules mentioned above.
 */

/**
 * @param {number[]} milestones
 * @return {number}
 */
var numberOfWeeks = function(milestones) {
  let total = 0;
  let maxMilestones = 0;

  for (const count of milestones) {
    total += count;
    maxMilestones = Math.max(maxMilestones, count);
  }

  return Math.min(total, 2 * (total - maxMilestones) + 1);
};
