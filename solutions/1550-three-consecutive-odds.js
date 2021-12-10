/**
 * 1550. Three Consecutive Odds
 * https://leetcode.com/problems/three-consecutive-odds/
 * Difficulty: Easy
 *
 * Given an integer array arr, return true if there are three consecutive odd
 * numbers in the array. Otherwise, return false.
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
  for (let i = 0, count = 0; i < arr.length; i++) {
    count = arr[i] % 2 !== 0 ? count + 1 : 0;
    if (count === 3) return true;
  }
  return false;
};
