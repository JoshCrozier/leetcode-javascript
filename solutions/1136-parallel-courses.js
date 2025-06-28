/**
 * 1136. Parallel Courses
 * https://leetcode.com/problems/parallel-courses/
 * Difficulty: Medium
 *
 * You are given an integer n, which indicates that there are n courses labeled from 1 to n.
 * You are also given an array relations where relations[i] = [prevCoursei, nextCoursei],
 * representing a prerequisite relationship between course prevCoursei and course
 * nextCoursei: course prevCoursei has to be taken before course nextCoursei.
 *
 * In one semester, you can take any number of courses as long as you have taken all the
 * prerequisites in the previous semester for the courses you are taking.
 *
 * Return the minimum number of semesters needed to take all courses. If there is no way to
 * take all the courses, return -1.
 */

/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
var minimumSemesters = function(n, relations) {
  const graph = new Map();
  const indegree = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    graph.set(i, []);
  }

  for (const [prev, next] of relations) {
    graph.get(prev).push(next);
    indegree[next]++;
  }

  const queue = [];
  for (let i = 1; i <= n; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  let semesters = 0;
  let coursesCompleted = 0;

  while (queue.length > 0) {
    const currentSemesterSize = queue.length;
    semesters++;

    for (let i = 0; i < currentSemesterSize; i++) {
      const course = queue.shift();
      coursesCompleted++;

      for (const nextCourse of graph.get(course)) {
        indegree[nextCourse]--;
        if (indegree[nextCourse] === 0) {
          queue.push(nextCourse);
        }
      }
    }
  }

  return coursesCompleted === n ? semesters : -1;
};
