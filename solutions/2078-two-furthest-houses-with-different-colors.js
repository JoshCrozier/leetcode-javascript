/**
 * 2078. Two Furthest Houses With Different Colors
 * https://leetcode.com/problems/two-furthest-houses-with-different-colors/
 * Difficulty: Easy
 *
 * There are n houses evenly lined up on the street, and each house is beautifully painted.
 * You are given a 0-indexed integer array colors of length n, where colors[i] represents
 * the color of the ith house.
 *
 * Return the maximum distance between two houses with different colors.
 *
 * The distance between the ith and jth houses is abs(i - j), where abs(x) is the absolute
 * value of x.
 */

/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
  let result = 0;

  for (let i = 0; i < colors.length; i++) {
    for (let j = i + 1; j < colors.length; j++) {
      if (colors[i] !== colors[j]) {
        result = Math.max(result, j - i);
      }
    }
  }

  return result;
};
