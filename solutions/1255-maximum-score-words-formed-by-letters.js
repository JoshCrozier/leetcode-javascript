/**
 * 1255. Maximum Score Words Formed by Letters
 * https://leetcode.com/problems/maximum-score-words-formed-by-letters/
 * Difficulty: Hard
 *
 * Given a list of words, list of  single letters (might be repeating) and score of every character.
 *
 * Return the maximum score of any valid set of words formed by using the given letters (words[i]
 * cannot be used two or more times).
 *
 * It is not necessary to use all characters in letters and each letter can only be used once.
 * Score of letters 'a', 'b', 'c', ... ,'z' is given by score[0], score[1], ... , score[25]
 * respectively.
 */

/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, score) {
  const letterCount = new Array(26).fill(0);
  for (const letter of letters) {
    letterCount[letter.charCodeAt(0) - 97]++;
  }
  return calculateMaxScore(0, letterCount);

  function calculateMaxScore(index, available) {
    if (index === words.length) return 0;

    const skipScore = calculateMaxScore(index + 1, available);
    const word = words[index];
    const tempCount = [...available];
    let canUse = true;
    let wordScore = 0;

    for (const char of word) {
      const charIndex = char.charCodeAt(0) - 97;
      if (tempCount[charIndex] === 0) {
        canUse = false;
        break;
      }
      tempCount[charIndex]--;
      wordScore += score[charIndex];
    }

    const useScore = canUse ? wordScore + calculateMaxScore(index + 1, tempCount) : 0;
    return Math.max(skipScore, useScore);
  }
};
