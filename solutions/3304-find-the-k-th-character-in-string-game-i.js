/**
 * 3304. Find the K-th Character in String Game I
 * https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/
 * Difficulty: Easy
 *
 * Alice and Bob are playing a game. Initially, Alice has a string word = "a".
 *
 * You are given a positive integer k.
 *
 * Now Bob will ask Alice to perform the following operation forever:
 * - Generate a new string by changing each character in word to its next character in the
 *   English alphabet, and append it to the original word.
 *
 * For example, performing the operation on "c" generates "cd" and performing the operation
 * on "zb" generates "zbac".
 *
 * Return the value of the kth character in word, after enough operations have been done for
 * word to have at least k characters.
 *
 * Note that the character 'z' can be changed to 'a' in the operation.
 */

/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
  let word = 'a';

  while (word.length < k) {
    let nextPart = '';
    for (const char of word) {
      nextPart += String.fromCharCode(((char.charCodeAt(0) - 97 + 1) % 26) + 97);
    }
    word += nextPart;
  }

  return word[k - 1];
};
