/**
 * 1578. Minimum Time to Make Rope Colorful
 * https://leetcode.com/problems/minimum-time-to-make-rope-colorful/
 * Difficulty: Medium
 *
 * Alice has n balloons arranged on a rope. You are given a 0-indexed string colors where colors[i]
 * is the color of the ith balloon.
 *
 * Alice wants the rope to be colorful. She does not want two consecutive balloons to be of the same
 * color, so she asks Bob for help. Bob can remove some balloons from the rope to make it colorful.
 * You are given a 0-indexed integer array neededTime where neededTime[i] is the time (in seconds)
 * that Bob needs to remove the ith balloon from the rope.
 *
 * Return the minimum time Bob needs to make the rope colorful.
 */

/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
  let result = 0;
  let i = 0;

  while (i < colors.length - 1) {
    if (colors[i] === colors[i + 1]) {
      let maxTime = neededTime[i];
      let sumTime = neededTime[i];
      let j = i + 1;

      while (j < colors.length && colors[j] === colors[i]) {
        maxTime = Math.max(maxTime, neededTime[j]);
        sumTime += neededTime[j];
        j++;
      }

      result += sumTime - maxTime;
      i = j;
    } else {
      i++;
    }
  }

  return result;
};
