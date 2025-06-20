/**
 * 555. Split Concatenated Strings
 * https://leetcode.com/problems/split-concatenated-strings/
 * Difficulty: Medium
 *
 * You are given an array of strings strs. You could concatenate these strings together into a
 * loop, where for each string, you could choose to reverse it or not. Among all the possible loops
 *
 * Return the lexicographically largest string after cutting the loop, which will make the looped
 * string into a regular one.
 *
 *
 * Specifically, to find the lexicographically largest string, you need to experience two phases:
 * 1. Concatenate all the strings into a loop, where you can reverse some strings or not and connect
 *    them in the same order as given.
 * 2. Cut and make one breakpoint in any place of the loop, which will make the looped string into
 *    a regular one starting from the character at the cutpoint.
 *
 * And your job is to find the lexicographically largest one among all the possible regular strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var splitLoopedString = function(strs) {
  const normalized = strs.map(str => {
    const reversed = str.split('').reverse().join('');
    return str > reversed ? str : reversed;
  });

  let result = '';
  for (let i = 0; i < normalized.length; i++) {
    const current = normalized[i];
    const prefix = normalized.slice(i + 1).join('') + normalized.slice(0, i).join('');
    const original = current;
    const reversed = current.split('').reverse().join('');

    for (const str of [original, reversed]) {
      for (let j = 0; j <= str.length; j++) {
        const candidate = str.slice(j) + prefix + str.slice(0, j);
        if (candidate > result) {
          result = candidate;
        }
      }
    }
  }

  return result;
};
