/**
 * 771. Jewels and Stones
 * https://leetcode.com/problems/jewels-and-stones/
 * Difficulty: Easy
 *
 * You're given strings jewels representing the types of stones that are jewels, and stones
 * representing the stones you have. Each character in stones is a type of stone you have.
 * You want to know how many of the stones you have are also jewels.
 *
 * Letters are case sensitive, so "a" is considered a different type of stone from "A".
 */

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  const set = new Set(jewels);
  let result = 0;

  for (const stone of stones) {
    if (set.has(stone)) {
      result++;
    }
  }

  return result;
};
