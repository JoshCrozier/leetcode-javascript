/**
 * 2937. Make Three Strings Equal
 * https://leetcode.com/problems/make-three-strings-equal/
 * Difficulty: Easy
 *
 * You are given three strings: s1, s2, and s3. In one operation you can choose one of these
 * strings and delete its rightmost character. Note that you cannot completely empty a string.
 *
 * Return the minimum number of operations required to make the strings equal. If it is
 * impossible to make them equal, return -1.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function(s1, s2, s3) {
  const minLength = Math.min(s1.length, s2.length, s3.length);

  let commonPrefixLength = 0;
  for (let i = 0; i < minLength; i++) {
    if (s1[i] !== s2[i] || s2[i] !== s3[i]) {
      break;
    }
    commonPrefixLength++;
  }

  if (commonPrefixLength === 0) {
    return -1;
  }

  return s1.length + s2.length + s3.length - 3 * commonPrefixLength;
};
