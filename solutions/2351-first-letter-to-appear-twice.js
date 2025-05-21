/**
 * 2351. First Letter to Appear Twice
 * https://leetcode.com/problems/first-letter-to-appear-twice/
 * Difficulty: Easy
 *
 * Given a string s consisting of lowercase English letters, return the first letter
 * to appear twice.
 *
 * Note:
 * - A letter a appears twice before another letter b if the second occurrence of a is before
 *   the second occurrence of b.
 * - s will contain at least one letter that appears twice.
 */

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
  const set = new Set();

  for (const char of s) {
    if (set.has(char)) return char;
    set.add(char);
  }
};
