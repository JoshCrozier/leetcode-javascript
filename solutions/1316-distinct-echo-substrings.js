/**
 * 1316. Distinct Echo Substrings
 * https://leetcode.com/problems/distinct-echo-substrings/
 * Difficulty: Hard
 *
 * Return the number of distinct non-empty substrings of text that can be written as the
 * concatenation of some string with itself (i.e. it can be written as a + a where a is
 * some string).
 */

/**
 * @param {string} text
 * @return {number}
 */
var distinctEchoSubstrings = function(text) {
  const set = new Set();

  for (let size = 1; size <= text.length / 2; size++) {
    let count = 0;

    for (let left = 0, right = size; right < text.length; left++, right++) {
      if (text[left] === text[right]) {
        count++;
      } else {
        count = 0;
      }

      if (count === size) {
        set.add(text.slice(left - size + 1, right + 1));
        count--;
      }
    }
  }

  return set.size;
};
