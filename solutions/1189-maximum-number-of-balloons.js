/**
 * 1189. Maximum Number of Balloons
 * https://leetcode.com/problems/maximum-number-of-balloons/
 * Difficulty: Easy
 *
 * Given a string text, you want to use the characters of text
 * to form as many instances of the word "balloon" as possible.
 *
 * You can use each character in text at most once. Return the
 * maximum number of instances that can be formed.
 */

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text, word = 'balloon', i = 0, count = 0) {
  const map = text.split('').reduce((o, k) => ({...o, [k]: o[k] ? ++o[k] : 1}), {});
  while (true) {
    const char = word[i++ % word.length];
    if (!map[char] || map[char]-- === 0) break;
    if (i % word.length === 0) count++;
  }
  return count;
};
