/**
 * 2127. Maximum Employees to Be Invited to a Meeting
 * https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/
 * Difficulty: Hard
 *
 * A company is organizing a meeting and has a list of n employees, waiting to be invited.
 * They have arranged for a large circular table, capable of seating any number of employees.
 *
 * The employees are numbered from 0 to n - 1. Each employee has a favorite person and they
 * will attend the meeting only if they can sit next to their favorite person at the table.
 * The favorite person of an employee is not themself.
 *
 * Given a 0-indexed integer array favorite, where favorite[i] denotes the favorite person of
 * the ith employee, return the maximum number of employees that can be invited to the meeting.
 */

/**
 * @param {number[]} fav
 * @return {number}
 */
var maximumInvitations = function(fav) {
  const n = fav.length;
  const graph = new Array(n).fill().map(() => []);
  const seen = new Set();
  let result = 0;

  for (let i = 0; i < n; i++) {
    graph[fav[i]].push(i);
  }

  for (let i = 0; i < n; i++) {
    result += i < fav[i] || fav[fav[i]] != i ? 0 : dfs(i, fav[i]) + dfs(fav[i], i);
  }

  for (let i = 0; i < n; i++) {
    let j = i;

    if (!seen.has(i)) {
      const m = new Map();

      for (let k = 0; !seen.has(j); k++) {
        seen.add(j);
        m.set(j, k);
        j = fav[j];
      }

      result = Math.max(result, m.size - m.get(j) || 0);
    }
  }

  function dfs(i, j) {
    return graph[i].reduce((max, n) => Math.max(max, n == j ? 0 : dfs(n, j)), 0) + 1;
  };

  return result;
};
