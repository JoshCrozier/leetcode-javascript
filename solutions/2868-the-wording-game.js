/**
 * 2868. The Wording Game
 * https://leetcode.com/problems/the-wording-game/
 * Difficulty: Hard
 *
 * Alice and Bob each have a lexicographically sorted array of strings named a and b respectively.
 *
 * They are playing a wording game with the following rules:
 * - On each turn, the current player should play a word from their list such that the new word is
 *   closely greater than the last played word; then it's the other player's turn.
 * - If a player can't play a word on their turn, they lose.
 *
 * Alice starts the game by playing her lexicographically smallest word.
 *
 * Given a and b, return true if Alice can win knowing that both players play their best, and
 * false otherwise.
 *
 * A word w is closely greater than a word z if the following conditions are met:
 * - w is lexicographically greater than z.
 * - If w1 is the first letter of w and z1 is the first letter of z, w1 should either be equal
 *   to z1 or be the letter after z1 in the alphabet.
 * - For example, the word "care" is closely greater than "book" and "car", but is not closely
 *   greater than "ant" or "cook".
 *
 * A string s is lexicographically greater than a string t if in the first position where s and
 * t differ, string s has a letter that appears later in the alphabet than the corresponding
 * letter in t. If the first min(s.length, t.length) characters do not differ, then the longer
 * string is the lexicographically greater one.
 */

/**
 * @param {string[]} a
 * @param {string[]} b
 * @return {boolean}
 */
var canAliceWin = function(a, b) {
  const dictionaries = [{}, {}];

  [a, b].forEach((words, playerIndex) => {
    for (let i = words.length - 1; i >= 0; i--) {
      const firstChar = words[i][0];
      if (!(firstChar in dictionaries[playerIndex])) {
        dictionaries[playerIndex][firstChar] = words[i];
      }
    }
  });

  const memo = new Map();

  return !canCurrentPlayerWin(a[0], 1);

  function canCurrentPlayerWin(previousWord, playerIndex) {
    const key = `${previousWord},${playerIndex}`;
    if (memo.has(key)) return memo.get(key);

    const initialChar = previousWord[0];
    const nextChar = String.fromCharCode(initialChar.charCodeAt(0) + 1);

    if (initialChar in dictionaries[playerIndex]
        && dictionaries[playerIndex][initialChar] > previousWord) {
      if (!canCurrentPlayerWin(dictionaries[playerIndex][initialChar], playerIndex ^ 1)) {
        memo.set(key, true);
        return true;
      }
    }

    if (nextChar in dictionaries[playerIndex]) {
      if (!canCurrentPlayerWin(dictionaries[playerIndex][nextChar], playerIndex ^ 1)) {
        memo.set(key, true);
        return true;
      }
    }

    memo.set(key, false);
    return false;
  }
};
