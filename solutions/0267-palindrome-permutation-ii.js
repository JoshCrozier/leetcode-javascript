/**
 * 267. Palindrome Permutation II
 * https://leetcode.com/problems/palindrome-permutation-ii/
 * Difficulty: Medium
 *
 * Given a string s, return all the palindromic permutations (without duplicates) of it.
 *
 * You may return the answer in any order. If s has no palindromic permutation, return an
 * empty list.
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function(s) {
  const map = new Map();
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let oddChar = '';
  const half = [];
  let oddCount = 0;

  for (const [char, count] of map) {
    if (count % 2) {
      oddCount++;
      oddChar = char;
    }
    for (let i = 0; i < Math.floor(count / 2); i++) {
      half.push(char);
    }
  }

  if (oddCount > 1) return [];

  const result = new Set();

  half.sort();
  permute(half, [], new Array(half.length).fill(false));
  return Array.from(result);

  function permute(chars, current, used) {
    if (current.length === chars.length) {
      const palindrome = current.join('') + oddChar + current.reverse().join('');
      result.add(palindrome);
      current.reverse();
      return;
    }

    for (let i = 0; i < chars.length; i++) {
      if (!used[i] && (i === 0 || chars[i] !== chars[i - 1] || used[i - 1])) {
        used[i] = true;
        current.push(chars[i]);
        permute(chars, current, used);
        current.pop();
        used[i] = false;
      }
    }
  }
};
