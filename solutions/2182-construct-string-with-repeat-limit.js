/**
 * 2182. Construct String With Repeat Limit
 * https://leetcode.com/problems/construct-string-with-repeat-limit/
 * Difficulty: Medium
 *
 * You are given a string s and an integer repeatLimit. Construct a new string
 * repeatLimitedString using the characters of s such that no letter appears more than
 * repeatLimit times in a row. You do not have to use all characters from s.
 *
 * Return the lexicographically largest repeatLimitedString possible.
 *
 * A string a is lexicographically larger than a string b if in the first position where
 * a and b differ, string a has a letter that appears later in the alphabet than the
 * corresponding letter in b. If the first min(a.length, b.length) characters do not differ,
 * then the longer string is the lexicographically larger one.
 */

/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
  const frequency = new Array(26).fill(0);
  for (const char of s) {
    frequency[char.charCodeAt(0) - 97]++;
  }

  const result = [];
  let currentChar = 25;

  while (currentChar >= 0) {
    if (frequency[currentChar] === 0) {
      currentChar--;
      continue;
    }

    const useCount = Math.min(frequency[currentChar], repeatLimit);
    for (let i = 0; i < useCount; i++) {
      result.push(String.fromCharCode(currentChar + 97));
    }
    frequency[currentChar] -= useCount;

    if (frequency[currentChar] > 0) {
      let nextChar = currentChar - 1;
      while (nextChar >= 0 && frequency[nextChar] === 0) {
        nextChar--;
      }

      if (nextChar < 0) break;

      result.push(String.fromCharCode(nextChar + 97));
      frequency[nextChar]--;
    } else {
      currentChar--;
    }
  }

  return result.join('');
};
