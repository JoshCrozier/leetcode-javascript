/**
 * 1894. Find the Student that Will Replace the Chalk
 * https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/
 * Difficulty: Medium
 *
 * There are n students in a class numbered from 0 to n - 1. The teacher will give each student
 * a problem starting with the student number 0, then the student number 1, and so on until the
 * teacher reaches the student number n - 1. After that, the teacher will restart the process,
 * starting with the student number 0 again.
 *
 * You are given a 0-indexed integer array chalk and an integer k. There are initially k pieces
 * of chalk. When the student number i is given a problem to solve, they will use chalk[i]
 * pieces of chalk to solve that problem. However, if the current number of chalk pieces is
 * strictly less than chalk[i], then the student number i will be asked to replace the chalk.
 *
 * Return the index of the student that will replace the chalk pieces.
 */

/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
  let totalChalk = 0;
  for (const amount of chalk) {
    totalChalk += amount;
  }

  k = k % totalChalk;

  for (let i = 0; i < chalk.length; i++) {
    if (k < chalk[i]) return i;
    k -= chalk[i];
  }

  return 0;
};
