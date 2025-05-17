/**
 * 2227. Encrypt and Decrypt Strings
 * https://leetcode.com/problems/encrypt-and-decrypt-strings/
 * Difficulty: Hard
 *
 * You are given a character array keys containing unique characters and a string array values
 * containing strings of length 2. You are also given another string array dictionary that
 * contains all permitted original strings after decryption. You should implement a data structure
 * that can encrypt or decrypt a 0-indexed string.
 *
 * A string is encrypted with the following process:
 * 1. For each character c in the string, we find the index i satisfying keys[i] == c in keys.
 * 2. Replace c with values[i] in the string.
 *
 * Note that in case a character of the string is not present in keys, the encryption process cannot
 * be carried out, and an empty string "" is returned.
 *
 * A string is decrypted with the following process:
 * 1. For each substring s of length 2 occurring at an even index in the string, we find an i such
 *    that values[i] == s. If there are multiple valid i, we choose any one of them. This means a
 *    string could have multiple possible strings it can decrypt to.
 * 2. Replace s with keys[i] in the string.
 *
 * Implement the Encrypter class:
 * - Encrypter(char[] keys, String[] values, String[] dictionary) Initializes the Encrypter class
 *   with keys, values, and dictionary.
 * - String encrypt(String word1) Encrypts word1 with the encryption process described above and
 *   returns the encrypted string.
 * - int decrypt(String word2) Returns the number of possible strings word2 could decrypt to that
 *   also appear in dictionary.
 */

/**
 * @param {character[]} keys
 * @param {string[]} values
 * @param {string[]} dictionary
 */
var Encrypter = function(keys, values, dictionary) {
  this.encryptMap = new Map();
  this.validEncryptions = new Map();

  for (let i = 0; i < keys.length; i++) {
    this.encryptMap.set(keys[i], values[i]);
  }

  for (const word of dictionary) {
    const encrypted = this.encrypt(word);
    if (encrypted !== '') {
      this.validEncryptions.set(encrypted, (this.validEncryptions.get(encrypted) || 0) + 1);
    }
  }
};

/**
 * @param {string} word1
 * @return {string}
 */
Encrypter.prototype.encrypt = function(word1) {
  let result = '';

  for (const char of word1) {
    if (!this.encryptMap.has(char)) {
      return '';
    }
    result += this.encryptMap.get(char);
  }

  return result;
};

/**
 * @param {string} word2
 * @return {number}
 */
Encrypter.prototype.decrypt = function(word2) {
  return this.validEncryptions.get(word2) || 0;
};
