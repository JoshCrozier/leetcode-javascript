/**
 * 2109. Adding Spaces to a String
 * https://leetcode.com/problems/adding-spaces-to-a-string/
 * Difficulty: Medium
 *
 * You are given a 0-indexed string s and a 0-indexed integer array spaces that describes the
 * indices in the original string where spaces will be added. Each space should be inserted
 * before the character at the given index.
 * - For example, given s = "EnjoyYourCoffee" and spaces = [5, 9], we place spaces before 'Y'
 *   and 'C', which are at indices 5 and 9 respectively. Thus, we obtain "Enjoy Your Coffee".
 *
 * Return the modified string after the spaces have been added.
 */

/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
  let result = '';
  let spaceIndex = 0;

  for (let i = 0; i < s.length; i++) {
    if (spaceIndex < spaces.length && i === spaces[spaceIndex]) {
      result += ' ';
      spaceIndex++;
    }
    result += s[i];
  }

  return result;
};
