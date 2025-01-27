/**
 * 1462. Course Schedule IV
 * https://leetcode.com/problems/course-schedule-iv/
 * Difficulty: Medium
 *
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you
 * must take course ai first if you want to take course bi.
 *
 * - For example, the pair [0, 1] indicates that you have to take course 0 before you can take
 *   course 1.
 *
 * Prerequisites can also be indirect. If course a is a prerequisite of course b, and course b
 * is a prerequisite of course c, then course a is a prerequisite of course c.
 *
 * You are also given an array queries where queries[j] = [uj, vj]. For the jth query, you
 * should answer whether course uj is a prerequisite of course vj or not.
 *
 * Return a boolean array answer, where answer[j] is the answer to the jth query.
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
  const lookup = new Array(numCourses).fill().map(() => new Array(numCourses).fill(false));
  prerequisites.forEach(([u, v]) => lookup[u][v] = true);

  for (let i = 0; i < numCourses; i++) {
    for (let j = 0; j < numCourses; j++) {
      for (let k = 0; k < numCourses; k++) {
        if (lookup[j][i] && lookup[i][k]) {
          lookup[j][k] = true;
        }
      }
    }
  }

  return queries.map(([u, v]) => lookup[u][v]);
};
