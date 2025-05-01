/**
 * 1807. Evaluate the Bracket Pairs of a String
 * https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/
 * Difficulty: Medium
 *
 * You are given a string s that contains some bracket pairs, with each pair containing
 * a non-empty key.
 *
 * - For example, in the string "(name)is(age)yearsold", there are two bracket pairs that contain
 *   the keys "name" and "age".
 *
 * You know the values of a wide range of keys. This is represented by a 2D string array knowledge
 * where each knowledge[i] = [keyi, valuei] indicates that key keyi has a value of valuei.
 *
 * You are tasked to evaluate all of the bracket pairs. When you evaluate a bracket pair that
 * contains some key keyi, you will:
 * - Replace keyi and the bracket pair with the key's corresponding valuei.
 * - If you do not know the value of the key, you will replace keyi and the bracket pair with a
 *   question mark "?" (without the quotation marks).
 *
 * Each key will appear at most once in your knowledge. There will not be any nested brackets in s.
 *
 * Return the resulting string after evaluating all of the bracket pairs.
 */

/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
  const keyValueMap = new Map(knowledge);
  let result = '';
  let i = 0;

  while (i < s.length) {
    if (s[i] === '(') {
      i++;
      let key = '';
      while (i < s.length && s[i] !== ')') {
        key += s[i++];
      }
      result += keyValueMap.get(key) || '?';
      i++;
    } else {
      result += s[i++];
    }
  }

  return result;
};
