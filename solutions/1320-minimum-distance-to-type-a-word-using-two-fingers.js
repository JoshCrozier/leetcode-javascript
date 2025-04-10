/**
 * 1320. Minimum Distance to Type a Word Using Two Fingers
 * https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/
 * Difficulty: Hard
 *
 * You have a keyboard layout as shown above in the X-Y plane, where each English uppercase letter
 * is located at some coordinate.
 *
 * For example, the letter 'A' is located at coordinate (0, 0), the letter 'B' is located at
 * coordinate (0, 1), the letter 'P' is located at coordinate (2, 3) and the letter 'Z' is located
 * at coordinate (4, 1).
 *
 * Given the string word, return the minimum total distance to type such string using only two
 * fingers.
 *
 * The distance between coordinates (x1, y1) and (x2, y2) is |x1 - x2| + |y1 - y2|.
 *
 * Note that the initial positions of your two fingers are considered free so do not count towards
 * your total distance, also your two fingers do not have to start at the first letter or the first
 * two letters.
 */

/**
 * @param {string} word
 * @return {number}
 */
var minimumDistance = function(word) {
  const memo = {};
  return dp(0, null, null);

  function dp(index, finger1, finger2) {
    if (index === word.length) return 0;

    const key = `${index},${finger1},${finger2}`;
    if (memo[key] !== undefined) return memo[key];

    const nextChar = word[index];
    const moveFinger1 = distance(finger1, nextChar) + dp(index + 1, nextChar, finger2);
    const moveFinger2 = distance(finger2, nextChar) + dp(index + 1, finger1, nextChar);

    memo[key] = Math.min(moveFinger1, moveFinger2);
    return memo[key];
  }

  function getPosition(char) {
    const code = char.charCodeAt(0) - 65;
    return [Math.floor(code / 6), code % 6];
  }

  function distance(from, to) {
    if (from === null) return 0;
    const [x1, y1] = getPosition(from);
    const [x2, y2] = getPosition(to);
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }
};
