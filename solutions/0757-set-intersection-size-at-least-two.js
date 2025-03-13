/**
 * 757. Set Intersection Size At Least Two
 * https://leetcode.com/problems/set-intersection-size-at-least-two/
 * Difficulty: Hard
 *
 * You are given a 2D integer array intervals where intervals[i] = [starti, endi] represents
 * all the integers from starti to endi inclusively.
 *
 * A containing set is an array nums where each interval from intervals has at least two
 * integers in nums.
 *
 * For example, if intervals = [[1,3], [3,7], [8,9]], then [1,2,4,7,8,9] and [2,3,4,8,9]
 * are containing sets.
 *
 * Return the minimum possible size of a containing set.
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function(intervals) {
  intervals.sort((a, b) => a[1] - b[1] || b[0] - a[0]);
  let size = 0;
  let smallest = -1;
  let secondSmallest = -1;

  for (const [start, end] of intervals) {
    const hasTwo = start <= smallest;
    const hasOne = start <= secondSmallest;

    if (hasTwo) continue;
    if (hasOne) {
      smallest = secondSmallest;
      secondSmallest = end;
      size++;
    } else {
      smallest = end - 1;
      secondSmallest = end;
      size += 2;
    }
  }

  return size;
};
