/**
 * 1491. Average Salary Excluding the Minimum and Maximum Salary
 * https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
 * Difficulty: Easy
 *
 * Given an array of unique integers salary where salary[i] is the salary of the employee i.
 *
 * Return the average salary of employees excluding the minimum and maximum salary.
 */

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  salary.sort((a, b) => a - b);
  salary.shift();
  salary.pop();

  return salary.reduce((total, n) => total + n, 0) / salary.length;
};
