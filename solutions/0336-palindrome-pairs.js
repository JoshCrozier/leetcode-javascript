/**
 * 336. Palindrome Pairs
 * https://leetcode.com/problems/palindrome-pairs/
 * Difficulty: Hard
 *
 * You are given a 0-indexed array of unique strings words.
 *
 * A palindrome pair is a pair of integers (i, j) such that:
 * - 0 <= i, j < words.length,
 * - i != j, and
 * - words[i] + words[j] (the concatenation of the two strings) is a palindrome.
 *
 * Return an array of all the palindrome pairs of words.
 *
 * You must write an algorithm with O(sum of words[i].length) runtime complexity.
 */

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  const result = [];
  const map = new Map();
  const rMap = new Map();

  words.forEach((word, i) => {
    map.set(word, i);
    rMap.set(word.split('').reverse().join(''), i);
  });

  words.forEach((word, i) => {
    for (let j = 0; j <= word.length; j++) {
      if (isPalindrome(word, 0, j - 1)) {
        const right = word.slice(j);
        if (rMap.has(right) && rMap.get(right) !== i) {
          result.push([rMap.get(right), i]);
        }
      }
      if (j < word.length && isPalindrome(word, j, word.length - 1)) {
        const left = word.slice(0, j);
        if (rMap.has(left) && rMap.get(left) !== i) {
          result.push([i, rMap.get(left)]);
        }
      }
    }
  });

  return result;

  function isPalindrome(s, start, end) {
    while (start < end) {
      if (s[start++] !== s[end--]) return false;
    }
    return true;
  }
};
