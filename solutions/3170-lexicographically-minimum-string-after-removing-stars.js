/**
 * 3170. Lexicographically Minimum String After Removing Stars
 * https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/
 * Difficulty: Medium
 *
 * You are given a string s. It may contain any number of '*' characters. Your task is to
 * remove all '*' characters.
 *
 * While there is a '*', do the following operation:
 * - Delete the leftmost '*' and the smallest non-'*' character to its left. If there are several
 *   smallest characters, you can delete any of them.
 *
 * Return the lexicographically smallest resulting string after removing all '*' characters.
 */

/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function(s) {
  const chars = s.split('');
  const deleted = new Set();
  const stacks = new Array(26).fill().map(() => []);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      for (let j = 0; j < 26; j++) {
        if (stacks[j].length) {
          deleted.add(stacks[j].pop());
          deleted.add(i);
          break;
        }
      }
    } else {
      stacks[s[i].charCodeAt(0) - 97].push(i);
    }
  }

  return chars.filter((_, i) => !deleted.has(i)).join('');
};
