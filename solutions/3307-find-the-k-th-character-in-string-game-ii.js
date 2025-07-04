/**
 * 3307. Find the K-th Character in String Game II
 * https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/
 * Difficulty: Hard
 *
 * Alice and Bob are playing a game. Initially, Alice has a string word = "a".
 *
 * You are given a positive integer k. You are also given an integer array operations,
 * where operations[i] represents the type of the ith operation.
 *
 * Now Bob will ask Alice to perform all operations in sequence:
 * - If operations[i] == 0, append a copy of word to itself.
 * - If operations[i] == 1, generate a new string by changing each character in word to
 *   its next character in the English alphabet, and append it to the original word.
 *   For example, performing the operation on "c" generates "cd" and performing the
 *   operation on "zb" generates "zbac".
 *
 * Return the value of the kth character in word after performing all the operations.
 *
 * Note that the character 'z' can be changed to 'a' in the second type of operation.
 */

/**
 * @param {number} k
 * @param {number[]} operations
 * @return {character}
 */
var kthCharacter = function(k, operations) {
  const validOperations = [];
  let length = 1;

  for (const op of operations) {
    if (length >= k) break;
    validOperations.push(op);
    length *= 2;
  }

  return findCharacter(k, validOperations.length - 1, 0);

  function findCharacter(position, operationIndex, shifts) {
    if (operationIndex < 0) {
      return String.fromCharCode(97 + (shifts % 26));
    }

    const halfLength = Math.pow(2, operationIndex);

    if (position <= halfLength) {
      return findCharacter(position, operationIndex - 1, shifts);
    } else {
      const newShifts = shifts + validOperations[operationIndex];
      return findCharacter(position - halfLength, operationIndex - 1, newShifts);
    }
  }
};
