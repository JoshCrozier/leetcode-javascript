/**
 * 2451. Odd String Difference
 * https://leetcode.com/problems/odd-string-difference/
 * Difficulty: Easy
 *
 * You are given an array of equal-length strings words. Assume that the length of each
 * string is n.
 *
 * Each string words[i] can be converted into a difference integer array difference[i] of
 * length n - 1 where difference[i][j] = words[i][j+1] - words[i][j] where 0 <= j <= n - 2.
 * Note that the difference between two letters is the difference between their positions in
 * the alphabet i.e. the position of 'a' is 0, 'b' is 1, and 'z' is 25.
 * - For example, for the string "acb", the difference integer array is [2 - 0, 1 - 2] = [2, -1].
 *
 * All the strings in words have the same difference integer array, except one. You should find
 * that string.
 *
 * Return the string in words that has different difference integer array.
 */

/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
  const map = new Map();
  for (const word of words) {
    const diff = getDiff(word);
    map.set(diff, (map.get(diff) || 0) + 1);
  }

  let oddDiff;
  for (const [diff, count] of map) {
    if (count === 1) {
      oddDiff = diff;
      break;
    }
  }

  for (const word of words) {
    if (getDiff(word) === oddDiff) {
      return word;
    }
  }

  function getDiff(word) {
    const diff = [];
    for (let i = 1; i < word.length; i++) {
      diff.push(word.charCodeAt(i) - word.charCodeAt(i - 1));
    }
    return diff.join(',');
  }
};
