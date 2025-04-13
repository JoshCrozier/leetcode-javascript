/**
 * 1405. Longest Happy String
 * https://leetcode.com/problems/longest-happy-string/
 * Difficulty: Medium
 *
 * A string s is called happy if it satisfies the following conditions:
 * - s only contains the letters 'a', 'b', and 'c'.
 * - s does not contain any of "aaa", "bbb", or "ccc" as a substring.
 * - s contains at most a occurrences of the letter 'a'.
 * - s contains at most b occurrences of the letter 'b'.
 * - s contains at most c occurrences of the letter 'c'.
 *
 * Given three integers a, b, and c, return the longest possible happy string. If there are
 * multiple longest happy strings, return any of them. If there is no such string, return
 * the empty string "".
 *
 * A substring is a contiguous sequence of characters within a string.
 */

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
  const counts = [
    { char: 'a', count: a },
    { char: 'b', count: b },
    { char: 'c', count: c }
  ];
  const result = [];

  while (true) {
    counts.sort((x, y) => y.count - x.count);

    let added = false;
    for (let i = 0; i < 3; i++) {
      const { char, count } = counts[i];
      if (count === 0) continue;

      const total = result.length;
      if (total >= 2 && result[total - 1] === char && result[total - 2] === char) {
        continue;
      }

      result.push(char);
      counts[i].count--;
      added = true;
      break;
    }

    if (!added) break;
  }

  return result.join('');
};
