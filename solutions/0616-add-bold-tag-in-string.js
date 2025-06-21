/**
 * 616. Add Bold Tag in String
 * https://leetcode.com/problems/add-bold-tag-in-string/
 * Difficulty: Medium
 *
 * You are given a string s and an array of strings words.
 *
 * You should add a closed pair of bold tag <b> and </b> to wrap the substrings in s that
 * exist in words.
 * - If two such substrings overlap, you should wrap them together with only one pair of
 *   closed bold-tag.
 * - If two substrings wrapped by bold tags are consecutive, you should combine them.
 *
 * Return s after adding the bold tags.
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {string}
 */
var addBoldTag = function(s, words) {
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
