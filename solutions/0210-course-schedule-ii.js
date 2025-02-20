/**
 * 210. Course Schedule II
 * https://leetcode.com/problems/course-schedule-ii/
 * Difficulty: Medium
 *
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you
 * must take course bi first if you want to take course ai.
 *
 * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
 *
 * Return the ordering of courses you should take to finish all courses. If there are many valid
 * answers, return any of them. If it is impossible to finish all courses, return an empty array.
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const graph = Array(numCourses).fill().map(() => []);
  const seen = new Set();
  const path = new Set();
  const result = [];

  prerequisites.forEach(([c, p]) => graph[p].push(c));

  for (let i = 0; i < numCourses; i++) {
    if (!seen.has(i) && !dfs(i)) {
      return [];
    }
  }

  return result;

  function dfs(course) {
    if (path.has(course)) return false;
    if (seen.has(course)) return true;

    path.add(course);
    for (const c of graph[course]) {
      if (!dfs(c)) {
        return false;
      }
    }
    path.delete(course);
    seen.add(course);
    result.unshift(course);
    return true;
  }
};
