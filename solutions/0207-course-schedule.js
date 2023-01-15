/**
 * 207. Course Schedule
 * https://leetcode.com/problems/course-schedule/
 * Difficulty: Medium
 *
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you
 * must take course bi first if you want to take course ai.
 *
 * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
 *
 * Return true if you can finish all courses. Otherwise, return false.
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const graph = new Map();
  const seen = new Set();

  prerequisites.forEach(([course, prerequisite]) => {
    graph.set(course, graph.get(course) || []);
    graph.get(course).push(prerequisite);
  });

  function dfs(course) {
    if (seen.has(course)) {
      return false;
    }
    seen.add(course);
    for (const prerequisite of graph.get(course) || []) {
      if (!dfs(prerequisite)) return false;
    }
    seen.delete(course);
    graph.set(course, []);
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }

  return true;
};
