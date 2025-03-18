/**
 * 828. Count Unique Characters of All Substrings of a Given String
 * https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/
 * Difficulty: Hard
 *
 * Let's define a function countUniqueChars(s) that returns the number of unique characters in s.
 * - For example, calling countUniqueChars(s) if s = "LEETCODE" then "L", "T", "C", "O", "D" are
 *   the unique characters since they appear only once in s, therefore countUniqueChars(s) = 5.
 *
 * Given a string s, return the sum of countUniqueChars(t) where t is a substring of s. The test
 * cases are generated such that the answer fits in a 32-bit integer.
 *
 * Notice that some substrings can be repeated so in this case you have to count the repeated
 * ones too.
 */

/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function(s) {
  const n = s.length;
  const lastPositions = {};
  let result = 0;

  for (let i = 0; i < n; i++) {
    const char = s[i];
    if (!lastPositions[char]) lastPositions[char] = [-1, -1];

    const [prevPrev, prev] = lastPositions[char];
    result += (i - prev) * (prev - prevPrev);
    lastPositions[char] = [prev, i];
  }

  for (const char of Object.keys(lastPositions)) {
    const [prev, pos] = lastPositions[char];
    if (pos >= 0) result += (n - pos) * (pos - prev);
  }

  return result;
};
