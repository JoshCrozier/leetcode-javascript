/**
 * 767. Reorganize String
 * https://leetcode.com/problems/reorganize-string/
 * Difficulty: Medium
 *
 * Given a string s, rearrange the characters of s so that any two adjacent characters are
 * not the same.
 *
 * Return any possible rearrangement of s or return "" if not possible.
 */

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
  const charCount = new Map();
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  const maxHeap = [...charCount.entries()]
    .sort((a, b) => b[1] - a[1]);

  if (maxHeap[0][1] > Math.ceil(s.length / 2)) {
    return '';
  }

  const result = [];
  let index = 0;

  while (maxHeap.length) {
    const [char, count] = maxHeap.shift();
    for (let i = 0; i < count; i++) {
      result[index] = char;
      index += 2;
      if (index >= s.length) index = 1;
    }
  }

  return result.join('');
};
