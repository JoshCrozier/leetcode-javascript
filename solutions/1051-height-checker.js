/**
 * 1051. Height Checker
 * https://leetcode.com/problems/height-checker/
 * Difficulty: Easy
 *
 * A school is trying to take an annual photo of all the students. The students are asked
 * to stand in a single file line in non-decreasing order by height. Let this ordering be
 * represented by the integer array expected where expected[i] is the expected height of
 * the ith student in line.
 *
 * You are given an integer array heights representing the current order that the students
 * are standing in. Each heights[i] is the height of the ith student in line (0-indexed).
 *
 * Return the number of indices where heights[i] != expected[i].
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  return [...heights]
    .sort((a, b) => a - b)
    .filter((expected, i) => heights[i] !== expected).length;
};
