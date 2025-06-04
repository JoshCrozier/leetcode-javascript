/**
 * 2848. Points That Intersect With Cars
 * https://leetcode.com/problems/points-that-intersect-with-cars/
 * Difficulty: Easy
 *
 * You are given a 0-indexed 2D integer array nums representing the coordinates of the cars
 * parking on a number line. For any index i, nums[i] = [starti, endi] where starti is the
 * starting point of the ith car and endi is the ending point of the ith car.
 *
 * Return the number of integer points on the line that are covered with any part of a car.
 */

/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
  const set = new Set();

  for (const [start, end] of nums) {
    for (let i = start; i <= end; i++) {
      set.add(i);
    }
  }

  return set.size;
};
