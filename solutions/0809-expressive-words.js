/**
 * 809. Expressive Words
 * https://leetcode.com/problems/expressive-words/
 * Difficulty: Medium
 *
 * Sometimes people repeat letters to represent extra feeling. For example:
 * - "hello" -> "heeellooo"
 * - "hi" -> "hiiii"
 *
 * In these strings like "heeellooo", we have groups of adjacent letters that are all the
 * same: "h", "eee", "ll", "ooo".
 *
 * You are given a string s and an array of query strings words. A query word is stretchy
 * if it can be made to be equal to s by any number of applications of the following extension
 * operation: choose a group consisting of characters c, and add some number of characters
 * c to the group so that the size of the group is three or more.
 *
 * For example, starting with "hello", we could do an extension on the group "o" to get
 * "hellooo", but we cannot get "helloo" since the group "oo" has a size less than three.
 * Also, we could do another extension like "ll" -> "lllll" to get "helllllooo". If
 * s = "helllllooo", then the query word "hello" would be stretchy because of these two
 * extension operations: query = "hello" -> "hellooo" -> "helllllooo" = s.
 *
 * Return the number of query strings that are stretchy.
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(s, words) {
  let result = 0;

  for (const word of words) {
    if (verify(s, word)) {
      result++;
    }
  }

  return result;
};

function verify(s, word) {
  let i = 0;
  let j = 0;

  while (i < s.length && j < word.length) {
    if (s[i] !== word[j]) return false;

    const char = s[i];
    let sCount = 0;

    while (i < s.length && s[i] === char) {
      sCount++;
      i++;
    }

    let wordCount = 0;

    while (j < word.length && word[j] === char) {
      wordCount++;
      j++;
    }

    if (wordCount > sCount) return false;
    if (sCount > wordCount && sCount < 3) return false;
  }

  return i === s.length && j === word.length;
}
