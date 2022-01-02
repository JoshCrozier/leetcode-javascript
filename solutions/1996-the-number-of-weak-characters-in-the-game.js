/**
 * 1996. The Number of Weak Characters in the Game
 * https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/
 * Difficulty: Medium
 *
 * You are playing a game that contains multiple characters, and each of the
 * characters has two main properties: attack and defense. You are given a 2D
 * integer array properties where properties[i] = [attacki, defensei] represents
 * the properties of the ith character in the game.
 *
 * A character is said to be weak if any other character has both attack and
 * defense levels strictly greater than this character's attack and defense levels.
 * More formally, a character i is said to be weak if there exists another character
 * j where attackj > attacki and defensej > defensei.
 *
 * Return the number of weak characters.
 */

/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function(properties) {
  let result = 0;
  let max = 0;

  properties.sort((a, b) => (b[0] === a[0]) ? a[1] - b[1] : b[0] - a[0]);

  for (let i = 0; i < properties.length; i++) {
    if (properties[i][1] < max) result++;
    max = Math.max(max, properties[i][1]);
  }

  return result;
};
