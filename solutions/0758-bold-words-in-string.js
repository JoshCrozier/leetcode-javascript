/**
 * 758. Bold Words in String
 * https://leetcode.com/problems/bold-words-in-string/
 * Difficulty: Medium
 *
 * Given an array of keywords words and a string s, make all appearances of all keywords words[i]
 * in s bold. Any letters between <b> and </b> tags become bold.
 *
 * Return s after adding the bold tags. The returned string should use the least number of tags
 * possible, and the tags should form a valid combination.
 */

/**
 * @param {string[]} words
 * @param {string} s
 * @return {string}
 */
var boldWords = function(words, s) {
  const boldIntervals = [];

  for (const word of words) {
    let start = s.indexOf(word);
    while (start !== -1) {
      boldIntervals.push([start, start + word.length]);
      start = s.indexOf(word, start + 1);
    }
  }

  if (!boldIntervals.length) return s;

  boldIntervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  const mergedIntervals = [];
  let [currentStart, currentEnd] = boldIntervals[0];

  for (let i = 1; i < boldIntervals.length; i++) {
    const [nextStart, nextEnd] = boldIntervals[i];
    if (nextStart <= currentEnd) {
      currentEnd = Math.max(currentEnd, nextEnd);
    } else {
      mergedIntervals.push([currentStart, currentEnd]);
      [currentStart, currentEnd] = [nextStart, nextEnd];
    }
  }
  mergedIntervals.push([currentStart, currentEnd]);

  let result = '';
  let lastEnd = 0;
  for (const [start, end] of mergedIntervals) {
    result += s.slice(lastEnd, start) + '<b>' + s.slice(start, end) + '</b>';
    lastEnd = end;
  }

  result += s.slice(lastEnd);

  return result;
};
