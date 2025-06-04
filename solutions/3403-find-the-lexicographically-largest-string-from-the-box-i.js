/**
 * 3403. Find the Lexicographically Largest String From the Box I
 * https://leetcode.com/problems/find-the-lexicographically-largest-string-from-the-box-i/
 * Difficulty: Medium
 *
 * You are given a string word, and an integer numFriends.
 *
 * Alice is organizing a game for her numFriends friends. There are multiple rounds in the game,
 * where in each round:
 * - word is split into numFriends non-empty strings, such that no previous round has had the
 *   exact same split.
 * - All the split words are put into a box.
 *
 * Find the lexicographically largest string from the box after all the rounds are finished.
 */

/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function(word, numFriends) {
  if (numFriends === 1) return word;

  let result = '';
  const wordLength = word.length;

  for (let startIndex = 0; startIndex < wordLength; startIndex++) {
    const maxLength = wordLength - numFriends + 1;
    const endIndex = Math.min(startIndex + maxLength, wordLength);
    const substring = word.slice(startIndex, endIndex);

    if (substring > result) {
      result = substring;
    }
  }

  return result;
};
