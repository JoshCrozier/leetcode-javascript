/**
 * 881. Boats to Save People
 * https://leetcode.com/problems/boats-to-save-people/
 * Difficulty: Medium
 *
 * You are given an array people where people[i] is the weight of the ith person, and an infinite
 * number of boats where each boat can carry a maximum weight of limit. Each boat carries at
 * most two people at the same time, provided the sum of the weight of those people is at most
 * limit.
 *
 * Return the minimum number of boats to carry every given person.
 */

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  people.sort((a, b) => a - b);
  let boats = 0;
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (left < right && people[left] + people[right] <= limit) {
      left++;
      right--;
    } else {
      right--;
    }
    boats++;
  }

  return boats;
};
