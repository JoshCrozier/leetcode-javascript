/**
 * 744. Find Smallest Letter Greater Than Target
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 * Difficulty: Easy
 *
 * You are given an array of characters letters that is sorted in non-decreasing order,
 * and a character target. There are at least two different characters in letters.
 *
 * Return the smallest character in letters that is lexicographically greater than target.
 * If such a character does not exist, return the first character in letters.
 */

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  return letters.find(l => l > target) || letters[0];
};
