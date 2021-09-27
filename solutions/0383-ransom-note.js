/**
 * 383. Ransom Note
 * https://leetcode.com/problems/ransom-note/
 * Difficulty: Easy
 *
 * Given two stings ransomNote and magazine, return true if ransomNote
 * can be constructed from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = new Map();

  for (let i = magazine.length - 1; i > -1; i--) {
    map.set(magazine[i], (map.get(magazine[i]) || 0) + 1);
  }

  for (let i = ransomNote.length - 1; i > -1; i--) {
    if ((map.get(ransomNote[i]) || 0) < 1) {
      return false;
    }
    map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
  }

  return true;
};
