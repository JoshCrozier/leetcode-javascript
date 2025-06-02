/**
 * 2798. Number of Employees Who Met the Target
 * https://leetcode.com/problems/number-of-employees-who-met-the-target/
 * Difficulty: Easy
 *
 * There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked
 * for hours[i] hours in the company.
 *
 * The company requires each employee to work for at least target hours.
 *
 * You are given a 0-indexed array of non-negative integers hours of length n and a non-negative
 * integer target.
 *
 * Return the integer denoting the number of employees who worked at least target hours.
 */

/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
  let count = 0;

  for (const hoursWorked of hours) {
    if (hoursWorked >= target) count++;
  }

  return count;
};
