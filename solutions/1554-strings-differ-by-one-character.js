/**
 * 1554. Strings Differ by One Character
 * https://leetcode.com/problems/strings-differ-by-one-character/
 * Difficulty: Medium
 *
 * Given a list of strings dict where all the strings are of the same length.
 *
 * Return true if there are 2 strings that only differ by 1 character in the same index,
 * otherwise return false.
 */

/**
 * @param {string[]} dict
 * @return {boolean}
 */
var differByOne = function(dict) {
  const m = dict[0].length;

  for (let pos = 0; pos < m; pos++) {
    const patterns = new Set();

    for (const word of dict) {
      const pattern = word.slice(0, pos) + '*' + word.slice(pos + 1);

      if (patterns.has(pattern)) {
        return true;
      }

      patterns.add(pattern);
    }
  }

  return false;
};
