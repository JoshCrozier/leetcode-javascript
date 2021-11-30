/**
 * 1460. Make Two Arrays Equal by Reversing Sub-arrays
 * https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/
 * Difficulty: Easy
 *
 * Given two integer arrays of equal length target and arr.
 *
 * In one step, you can select any non-empty sub-array of arr and reverse it.
 * You are allowed to make any number of steps.
 *
 * Return True if you can make arr equal to target, or False otherwise.
 */

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
  return target.sort().join('') === arr.sort().join('');
};
