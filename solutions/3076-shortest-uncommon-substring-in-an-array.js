/**
 * 3076. Shortest Uncommon Substring in an Array
 * https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/
 * Difficulty: Medium
 *
 * You are given an array arr of size n consisting of non-empty strings.
 *
 * Find a string array answer of size n such that:
 * - answer[i] is the shortest substring of arr[i] that does not occur as a substring in any
 *   other string in arr. If multiple such substrings exist, answer[i] should be the
 *   lexicographically smallest. And if no such substring exists, answer[i] should be an
 *   empty string.
 *
 * Return the array answer.
 */

/**
 * @param {string[]} arr
 * @return {string[]}
 */
var shortestSubstrings = function(arr) {
  const n = arr.length;
  const result = new Array(n).fill('');

  for (let i = 0; i < n; i++) {
    const str = arr[i];
    let minLen = Infinity;
    let minSubstr = '';

    for (let len = 1; len <= str.length; len++) {
      for (let start = 0; start <= str.length - len; start++) {
        const substr = str.slice(start, start + len);
        if (isUnique(substr, i)) {
          if (len < minLen || (len === minLen && substr < minSubstr)) {
            minLen = len;
            minSubstr = substr;
          }
        }
      }
      if (minSubstr) break;
    }

    result[i] = minSubstr;
  }

  return result;

  function isUnique(substr, strIdx) {
    for (let i = 0; i < n; i++) {
      if (i !== strIdx && arr[i].includes(substr)) {
        return false;
      }
    }
    return true;
  }
};
