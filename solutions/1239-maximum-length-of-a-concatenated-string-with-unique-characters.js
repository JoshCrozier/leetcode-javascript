/**
 * 1239. Maximum Length of a Concatenated String with Unique Characters
 * https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/
 * Difficulty: Medium
 *
 * You are given an array of strings arr. A string s is formed by the concatenation of a subsequence
 * of arr that has unique characters.
 *
 * Return the maximum possible length of s.
 *
 * A subsequence is an array that can be derived from another array by deleting some or no elements
 * without changing the order of the remaining elements.
 */

/**
 * @param {string[]} arr
 * @return {number}
 */
function maxLength(arr) {
  let result = 0;
  explore('', 0);
  return result;

  function explore(current, index) {
    result = Math.max(result, current.length);
    for (let i = index; i < arr.length; i++) {
      if (isUnique(current + arr[i])) {
        explore(current + arr[i], i + 1);
      }
    }
  }

  function isUnique(str) {
    return new Set(str).size === str.length;
  }
}
