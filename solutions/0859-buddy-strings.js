/**
 * 859. Buddy Strings
 * https://leetcode.com/problems/buddy-strings/
 * Difficulty: Easy
 *
 * Given two strings s and goal, return true if you can swap two letters in s so the result is
 * equal to goal, otherwise, return false.
 *
 * Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and
 * swapping the characters at s[i] and s[j].
 *
 * For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
 */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
  if (s.length !== goal.length) return false;

  const differences = [];
  const charCount = new Map();
  let hasDuplicate = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      differences.push(i);
      if (differences.length > 2) return false;
    }
    charCount.set(s[i], (charCount.get(s[i]) || 0) + 1);
    if (charCount.get(s[i]) > 1) hasDuplicate = true;
  }

  if (differences.length === 0) return hasDuplicate;
  if (differences.length !== 2) return false;

  const [first, second] = differences;
  return s[first] === goal[second] && s[second] === goal[first];
};
