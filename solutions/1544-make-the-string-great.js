/**
 * 1544. Make The String Great
 * https://leetcode.com/problems/make-the-string-great/
 * Difficulty: Easy
 *
 * Given a string s of lower and upper case English letters.
 *
 * A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:
 * - 0 <= i <= s.length - 2
 * - s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
 *
 * To make the string good, you can choose two adjacent characters that make the string bad and
 * remove them. You can keep doing this until the string becomes good.
 *
 * Return the string after making it good. The answer is guaranteed to be unique under the given
 * constraints.
 *
 * Notice that an empty string is also good.
 */

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
  const stack = [];

  for (const char of s) {
    const lastChar = stack[stack.length - 1];
    if (lastChar && ((char.toLowerCase() === lastChar.toLowerCase()) && (char !== lastChar))) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
};
