/**
 * 3450. Maximum Students on a Single Bench
 * https://leetcode.com/problems/maximum-students-on-a-single-bench/
 * Difficulty: Easy
 *
 * You are given a 2D integer array of student data students, where
 * students[i] = [student_id, bench_id] represents that student student_id is
 * sitting on the bench bench_id.
 *
 * Return the maximum number of unique students sitting on any single bench. If no
 * students are present, return 0.
 *
 * Note: A student can appear multiple times on the same bench in the input, but
 * they should be counted only once per bench.
 */

/**
 * @param {number[][]} students
 * @return {number}
 */
var maxStudentsOnBench = function(students) {
  const map = new Map();

  for (const [studentId, benchId] of students) {
    if (!map.has(benchId)) {
      map.set(benchId, new Set());
    }
    map.get(benchId).add(studentId);
  }

  let result = 0;
  for (const studentSet of map.values()) {
    result = Math.max(result, studentSet.size);
  }

  return result;
};
