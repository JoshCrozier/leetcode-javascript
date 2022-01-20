/**
 * 1576. Replace All ?'s to Avoid Consecutive Repeating Characters
 * https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/
 * Difficulty: Medium
 *
 * Given a string s containing only lowercase English letters and the '?' character, convert all
 * the '?' characters into lowercase letters such that the final string does not contain any
 * consecutive repeating characters. You cannot modify the non '?' characters.
 *
 * It is guaranteed that there are no consecutive repeating characters in the given string except
 * for '?'.
 *
 * Return the final string after all the conversions (possibly zero) have been made. If there is
 * more than one solution, return any of them. It can be shown that an answer is always possible
 * with the given constraints.
 */

/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
  const substitute = takenCharacteres => {
    for (let charCode = 97; ; charCode++) {
      const attempt = String.fromCharCode(charCode);

      if (!takenCharacteres.includes(attempt)) {
        return attempt;
      }
    }
  };

  const result = [...s];
  for (let index = 0; index < s.length; index++) {
    const takenCharacteres = [result[index - 1], result[index + 1]];
    result[index] = s[index] === '?' ? substitute(takenCharacteres) : s[index];
  }
  return result.join('');
};
