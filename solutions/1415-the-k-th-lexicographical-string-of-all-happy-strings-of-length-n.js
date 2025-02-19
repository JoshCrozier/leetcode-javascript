/**
 * 1415. The k-th Lexicographical String of All Happy Strings of Length n
 * https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/
 * Difficulty: Medium
 *
 * A happy string is a string that:
 * - consists only of letters of the set ['a', 'b', 'c'].
 * - s[i] != s[i + 1] for all values of i from 1 to s.length - 1 (string is 1-indexed).
 *
 * For example, strings "abc", "ac", "b" and "abcbabcbcb" are all happy strings and strings "aa",
 * "baa" and "ababbc" are not happy strings.
 *
 * Given two integers n and k, consider a list of all happy strings of length n sorted in
 * lexicographical order.
 *
 * Return the kth string of this list or return an empty string if there are less than k happy
 * strings of length n.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
  return backtrack('') || '';

  function backtrack(str) {
    if (str.length === n) {
      return --k ? false : str;
    }
    for (const character of 'abc') {
      if (character === str[str.length - 1]) {
        continue;
      }
      const value = backtrack(str + character);
      if (value) {
        return value;
      }
    }

    return false;
  }
};
