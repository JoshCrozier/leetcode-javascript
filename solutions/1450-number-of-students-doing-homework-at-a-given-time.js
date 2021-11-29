/**
 * 1450. Number of Students Doing Homework at a Given Time
 * https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
 * Difficulty: Easy
 *
 * Given two integer arrays startTime and endTime and given an integer queryTime.
 *
 * The ith student started doing their homework at the time startTime[i] and finished it
 * at time endTime[i].
 *
 * Return the number of students doing their homework at time queryTime. More formally,
 * return the number of students where queryTime lays in the interval [startTime[i],
 * endTime[i]] inclusive.
 */

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
  return startTime.filter((s, i) => queryTime >= s && queryTime <= endTime[i]).length;
};
