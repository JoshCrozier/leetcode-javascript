/**
 * 830. Positions of Large Groups
 * https://leetcode.com/problems/positions-of-large-groups/
 * Difficulty: Easy
 *
 * In a string s of lowercase letters, these letters form consecutive groups of the same character.
 *
 * For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".
 *
 * A group is identified by an interval [start, end], where start and end denote the start and end
 * indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].
 *
 * A group is considered large if it has 3 or more characters.
 *
 * Return the intervals of every large group sorted in increasing order by start index.
 */

/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
  const result = [];
  let start = 0;

  for (let i = 1; i <= s.length; i++) {
    if (s.length === i || s[i] !== s[start]) {
      if (i - start >= 3) {
        result.push([start, i - 1]);
      }
      start = i;
    }
  }

  return result;
};
