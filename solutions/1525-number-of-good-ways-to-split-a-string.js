/**
 * 1525. Number of Good Ways to Split a String
 * https://leetcode.com/problems/number-of-good-ways-to-split-a-string/
 * Difficulty: Medium
 *
 * You are given a string s.
 *
 * A split is called good if you can split s into two non-empty strings sleft and sright where
 * their concatenation is equal to s (i.e., sleft + sright = s) and the number of distinct letters
 * in sleft and sright is the same.
 *
 * Return the number of good splits you can make in s.
 */

/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
  const leftDistinct = new Map();
  const rightDistinct = new Map();
  let result = 0;

  for (const char of s) {
    rightDistinct.set(char, (rightDistinct.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length - 1; i++) {
    const char = s[i];
    leftDistinct.set(char, (leftDistinct.get(char) || 0) + 1);

    if (rightDistinct.get(char) === 1) {
      rightDistinct.delete(char);
    } else {
      rightDistinct.set(char, rightDistinct.get(char) - 1);
    }

    if (leftDistinct.size === rightDistinct.size) {
      result++;
    }
  }

  return result;
};
