/**
 * 1153. String Transforms Into Another String
 * https://leetcode.com/problems/string-transforms-into-another-string/
 * Difficulty: Hard
 *
 * Given two strings str1 and str2 of the same length, determine whether you can transform
 * str1 into str2 by doing zero or more conversions.
 *
 * In one conversion you can convert all occurrences of one character in str1 to any other
 * lowercase English character.
 *
 * Return true if and only if you can transform str1 into str2.
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canConvert = function(str1, str2) {
  if (str1 === str2) return true;

  const mapping = new Map();
  const uniqueCharsInStr2 = new Set();
  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];

    if (mapping.has(char1)) {
      if (mapping.get(char1) !== char2) {
        return false;
      }
    } else {
      mapping.set(char1, char2);
    }

    uniqueCharsInStr2.add(char2);
  }

  return uniqueCharsInStr2.size < 26;
};
