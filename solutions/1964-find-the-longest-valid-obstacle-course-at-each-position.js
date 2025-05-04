/**
 * 1964. Find the Longest Valid Obstacle Course at Each Position
 * https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/
 * Difficulty: Hard
 *
 * You want to build some obstacle courses. You are given a 0-indexed integer array obstacles of
 * length n, where obstacles[i] describes the height of the ith obstacle.
 *
 * For every index i between 0 and n - 1 (inclusive), find the length of the longest obstacle
 * course in obstacles such that:
 * - You choose any number of obstacles between 0 and i inclusive.
 * - You must include the ith obstacle in the course.
 * - You must put the chosen obstacles in the same order as they appear in obstacles.
 * - Every obstacle (except the first) is taller than or the same height as the obstacle immediately
 *   before it.
 *
 * Return an array ans of length n, where ans[i] is the length of the longest obstacle course for
 * index i as described above.
 */

/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function(obstacles) {
  const n = obstacles.length;
  const result = new Array(n).fill(1);
  const stack = [];

  for (let i = 0; i < n; i++) {
    const height = obstacles[i];
    let left = 0;
    let right = stack.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (stack[mid] <= height) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if (left < stack.length) {
      stack[left] = height;
    } else {
      stack.push(height);
    }

    result[i] = left + 1;
  }

  return result;
};
