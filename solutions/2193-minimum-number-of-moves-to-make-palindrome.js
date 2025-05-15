/**
 * 2193. Minimum Number of Moves to Make Palindrome
 * https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/
 * Difficulty: Hard
 *
 * You are given a string s consisting only of lowercase English letters.
 *
 * In one move, you can select any two adjacent characters of s and swap them.
 *
 * Return the minimum number of moves needed to make s a palindrome.
 *
 * Note that the input will be generated such that s can always be converted to a palindrome.
 */

/**
* @param {string} s
* @return {number}
*/
var minMovesToMakePalindrome = function(s) {
  const chars = s.split('');
  let moves = 0;

  while (chars.length > 1) {
    const matchIndex = chars.lastIndexOf(chars[0]);

    if (matchIndex === 0) {
      const middlePos = Math.floor(chars.length / 2);
      moves += middlePos;
      chars.splice(0, 1);
    } else {
      for (let i = matchIndex; i < chars.length - 1; i++) {
        [chars[i], chars[i + 1]] = [chars[i + 1], chars[i]];
        moves++;
      }

      chars.pop();
      chars.shift();
    }
  }

  return moves;
};
