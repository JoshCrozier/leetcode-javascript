/**
 * 1087. Brace Expansion
 * https://leetcode.com/problems/brace-expansion/
 * Difficulty: Medium
 *
 * You are given a string s representing a list of words. Each letter in the word has
 * one or more options.
 * - If there is one option, the letter is represented as is.
 * - If there is more than one option, then curly braces delimit the options.
 *   For example, "{a,b,c}" represents options ["a", "b", "c"].
 *
 * For example, if s = "a{b,c}", the first character is always 'a', but the second
 * character can be 'b' or 'c'. The original list is ["ab", "ac"].
 *
 * Return all words that can be formed in this manner, sorted in lexicographical order.
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var expand = function(s) {
  const groups = [];
  let i = 0;

  while (i < s.length) {
    if (s[i] === '{') {
      const start = i + 1;
      while (s[i] !== '}') i++;
      const options = s.substring(start, i).split(',');
      groups.push(options);
      i++;
    } else {
      groups.push([s[i]]);
      i++;
    }
  }

  const result = [];

  backtrack(0, '');

  return result.sort();

  function backtrack(index, current) {
    if (index === groups.length) {
      result.push(current);
      return;
    }

    for (const option of groups[index]) {
      backtrack(index + 1, current + option);
    }
  }
};
