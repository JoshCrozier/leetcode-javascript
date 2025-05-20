/**
 * 2325. Decode the Message
 * https://leetcode.com/problems/decode-the-message/
 * Difficulty: Easy
 *
 * You are given the strings key and message, which represent a cipher key and a secret message,
 * respectively. The steps to decode message are as follows:
 * 1. Use the first appearance of all 26 lowercase English letters in key as the order of the
 *    substitution table.
 * 2. Align the substitution table with the regular English alphabet.
 * 3. Each letter in message is then substituted using the table.
 * 4. Spaces ' ' are transformed to themselves.
 * 5. For example, given key = "happy boy" (actual key would have at least one instance of each
 *    letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b',
 *    'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
 *
 * Return the decoded message.
 */

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
  const substitution = new Map();
  let alphabetIndex = 0;

  for (const char of key) {
    if (char !== ' ' && !substitution.has(char)) {
      substitution.set(char, String.fromCharCode(97 + alphabetIndex++));
    }
  }

  let result = '';
  for (const char of message) {
    result += char === ' ' ? ' ' : substitution.get(char);
  }

  return result;
};
