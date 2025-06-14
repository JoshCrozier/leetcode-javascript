/**
 * 358. Rearrange String k Distance Apart
 * https://leetcode.com/problems/rearrange-string-k-distance-apart/
 * Difficulty: Hard
 *
 * Given a string s and an integer k, rearrange s such that the same characters are at least
 * distance k from each other. If it is not possible to rearrange the string, return an empty
 * string "".
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var rearrangeString = function(s, k) {
  if (k <= 1) return s;

  const charCount = new Array(26).fill(0);
  for (const char of s) {
    charCount[char.charCodeAt(0) - 97]++;
  }

  const maxHeap = [];
  for (let i = 0; i < 26; i++) {
    if (charCount[i] > 0) {
      maxHeap.push([charCount[i], String.fromCharCode(i + 97)]);
    }
  }
  maxHeap.sort((a, b) => b[0] - a[0]);

  const maxFreq = maxHeap[0] ? maxHeap[0][0] : 0;
  if (maxFreq > Math.ceil(s.length / k)) return '';

  const result = new Array(s.length).fill('');
  let index = 0;

  while (maxHeap.length) {
    const temp = [];
    for (let i = 0; i < k && maxHeap.length; i++) {
      const [count, char] = maxHeap.shift();
      while (index < s.length && result[index] !== '') {
        index++;
      }
      if (index >= s.length) index = 0;
      result[index] = char;
      index++;
      if (count > 1) temp.push([count - 1, char]);
    }

    temp.sort((a, b) => b[0] - a[0]);
    maxHeap.push(...temp);
    maxHeap.sort((a, b) => b[0] - a[0]);
  }

  for (let i = 0; i <= s.length - k; i++) {
    const seen = new Set();
    for (let j = i; j < i + k; j++) {
      if (seen.has(result[j])) return '';
      seen.add(result[j]);
    }
  }

  return result.join('');
};
