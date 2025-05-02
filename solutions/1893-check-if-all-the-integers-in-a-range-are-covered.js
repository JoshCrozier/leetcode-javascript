/**
 * 1893. Check if All the Integers in a Range Are Covered
 * https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/
 * Difficulty: Easy
 *
 * You are given a 2D integer array ranges and two integers left and right. Each
 * ranges[i] = [starti, endi] represents an inclusive interval between starti and endi.
 *
 * Return true if each integer in the inclusive range [left, right] is covered by at least
 * one interval in ranges. Return false otherwise.
 *
 * An integer x is covered by an interval ranges[i] = [starti, endi] if starti <= x <= endi.
 */

/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
  const covered = new Array(51).fill(false);

  for (const [start, end] of ranges) {
    for (let i = start; i <= end; i++) {
      covered[i] = true;
    }
  }

  for (let i = left; i <= right; i++) {
    if (!covered[i]) return false;
  }

  return true;
};
