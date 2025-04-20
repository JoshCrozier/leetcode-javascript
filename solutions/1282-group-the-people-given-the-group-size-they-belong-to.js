/**
 * 1282. Group the People Given the Group Size They Belong To
 * https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/
 * Difficulty: Medium
 *
 * There are n people that are split into some unknown number of groups. Each person is labeled
 * with a unique ID from 0 to n - 1.
 *
 * You are given an integer array groupSizes, where groupSizes[i] is the size of the group that
 * person i is in. For example, if groupSizes[1] = 3, then person 1 must be in a group of size 3.
 *
 * Return a list of groups such that each person i is in a group of size groupSizes[i].
 *
 * Each person should appear in exactly one group, and every person must be in a group. If there
 * are multiple answers, return any of them. It is guaranteed that there will be at least one
 * valid solution for the given input.
 */

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  const map = new Map();
  const grouped = [];

  for (let i = 0; i < groupSizes.length; i++) {
    const size = groupSizes[i];

    map.set(size, map.has(size) ? [...map.get(size), i] : [i]);

    if (map.get(size).length === size) {
      grouped.push(map.get(size));
      map.delete(size);
    }
  }

  return grouped;
};
