/**
 * 3406. Find the Lexicographically Largest String From the Box II
 * https://leetcode.com/problems/find-the-lexicographically-largest-string-from-the-box-ii/
 * Difficulty: Hard
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
 *
 * A string a is lexicographically smaller than a string b if in the first position where a
 * and b differ, string a has a letter that appears earlier in the alphabet than the corresponding
 * letter in b.
 *
 * If the first min(a.length, b.length) characters do not differ, then the shorter string is the
 * lexicographically smaller one.
 */

/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function(word, numFriends) {
  if (numFriends === 1) return word;
  const n = word.length;
  const maxLength = n - numFriends + 1;

  const pairs = [];
  for (let i = 0; i < n - 1; i++) {
    pairs.push(word[i] + word[i + 1]);
  }
  const maxPair = pairs.reduce((a, b) => a > b ? a : b);
  let result = word[n - 1];
  let index = -1;

  while (index < n) {
    index = word.indexOf(maxPair, index + 1);
    if (index === -1) break;
    const candidate = word.substring(index, index + maxLength);
    if (candidate > result) {
      result = candidate;
    }
  }

  return result;
};
