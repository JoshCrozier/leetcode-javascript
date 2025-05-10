/**
 * 2050. Parallel Courses III
 * https://leetcode.com/problems/parallel-courses-iii/
 * Difficulty: Hard
 *
 * You are given an integer n, which indicates that there are n courses labeled from 1 to n.
 * You are also given a 2D integer array relations where relations[j] = [prevCoursej, nextCoursej]
 * denotes that course prevCoursej has to be completed before course nextCoursej (prerequisite
 * relationship). Furthermore, you are given a 0-indexed integer array time where time[i] denotes
 * how many months it takes to complete the (i+1)th course.
 *
 * You must find the minimum number of months needed to complete all the courses following these
 * rules:
 * - You may start taking a course at any time if the prerequisites are met.
 * - Any number of courses can be taken at the same time.
 *
 * Return the minimum number of months needed to complete all the courses.
 *
 * Note: The test cases are generated such that it is possible to complete every course (i.e., the
 * graph is a directed acyclic graph).
 */

/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
var minimumTime = function(n, relations, time) {
  const adjacencyList = Array.from({ length: n + 1 }, () => []);
  const inDegree = new Array(n + 1).fill(0);
  const completionTime = new Array(n + 1).fill(0);

  for (const [prev, next] of relations) {
    adjacencyList[prev].push(next);
    inDegree[next]++;
  }

  const queue = [];
  for (let i = 1; i <= n; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
      completionTime[i] = time[i - 1];
    }
  }

  while (queue.length) {
    const current = queue.shift();
    for (const next of adjacencyList[current]) {
      completionTime[next] = Math.max(
        completionTime[next],
        completionTime[current] + time[next - 1]
      );
      if (--inDegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  return Math.max(...completionTime);
};
