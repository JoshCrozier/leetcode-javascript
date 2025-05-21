/**
 * 2358. Maximum Number of Groups Entering a Competition
 * https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/
 * Difficulty: Medium
 *
 * You are given a positive integer array grades which represents the grades of students in
 * a university. You would like to enter all these students into a competition in ordered
 * non-empty groups, such that the ordering meets the following conditions:
 * - The sum of the grades of students in the ith group is less than the sum of the grades of
 *   students in the (i + 1)th group, for all groups (except the last).
 * - The total number of students in the ith group is less than the total number of students
 *   in the (i + 1)th group, for all groups (except the last).
 *
 * Return the maximum number of groups that can be formed.
 */

/**
 * @param {number[]} grades
 * @return {number}
 */
var maximumGroups = function(grades) {
  let result = 0;
  let studentsUsed = 0;

  while (studentsUsed + result + 1 <= grades.length) {
    result++;
    studentsUsed += result;
  }

  return result;
};
