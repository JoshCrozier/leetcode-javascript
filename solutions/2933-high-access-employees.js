/**
 * 2933. High-Access Employees
 * https://leetcode.com/problems/high-access-employees/
 * Difficulty: Medium
 *
 * You are given a 2D 0-indexed array of strings, accessTimes, with size n. For each i where
 * 0 <= i <= n - 1, accessTimes[i][0] represents the name of an employee, and accessTimes[i][1]
 * represents the access time of that employee. All entries in accessTimes are within the same day.
 *
 * The access time is represented as four digits using a 24-hour time format, for example, "0800"
 * or "2250".
 *
 * An employee is said to be high-access if he has accessed the system three or more times within
 * a one-hour period.
 *
 * Times with exactly one hour of difference are not considered part of the same one-hour period.
 * For example, "0815" and "0915" are not part of the same one-hour period.
 *
 * Access times at the start and end of the day are not counted within the same one-hour period.
 * For example, "0005" and "2350" are not part of the same one-hour period.
 *
 * Return a list that contains the names of high-access employees with any order you want.
 */

/**
 * @param {string[][]} accessTimes
 * @return {string[]}
 */
var findHighAccessEmployees = function(accessTimes) {
  const employeeAccess = new Map();

  for (const [name, time] of accessTimes) {
    const minutes = parseInt(time.slice(0, 2)) * 60 + parseInt(time.slice(2));
    if (!employeeAccess.has(name)) {
      employeeAccess.set(name, []);
    }
    employeeAccess.get(name).push(minutes);
  }

  const result = [];
  for (const [name, times] of employeeAccess) {
    times.sort((a, b) => a - b);
    if (times.length >= 3) {
      for (let i = 0; i <= times.length - 3; i++) {
        if (times[i + 2] - times[i] < 60) {
          result.push(name);
          break;
        }
      }
    }
  }

  return result;
};
