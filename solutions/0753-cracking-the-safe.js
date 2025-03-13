/**
 * 753. Cracking the Safe
 * https://leetcode.com/problems/cracking-the-safe/
 * Difficulty: Hard
 *
 * There is a safe protected by a password. The password is a sequence of n digits where each
 * digit can be in the range [0, k - 1].
 *
 * The safe has a peculiar way of checking the password. When you enter in a sequence, it checks
 * the most recent n digits that were entered each time you type a digit.
 *
 * For example, the correct password is "345" and you enter in "012345":
 * - After typing 0, the most recent 3 digits is "0", which is incorrect.
 * - After typing 1, the most recent 3 digits is "01", which is incorrect.
 * - After typing 2, the most recent 3 digits is "012", which is incorrect.
 * - After typing 3, the most recent 3 digits is "123", which is incorrect.
 * - After typing 4, the most recent 3 digits is "234", which is incorrect.
 * - After typing 5, the most recent 3 digits is "345", which is correct and the safe unlocks.
 *
 * Return any string of minimum length that will unlock the safe at some point of entering it.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var crackSafe = function(n, k) {
  if (n === 1) return Array.from({ length: k }, (_, i) => i).join('');
  const seen = new Set();
  const targetSize = k ** n;
  let sequence = '0'.repeat(n);

  seen.add(sequence);
  build(sequence);
  return sequence;

  function build(curr) {
    if (seen.size === targetSize) return true;

    const prefix = curr.slice(-n + 1);
    for (let digit = 0; digit < k; digit++) {
      const next = prefix + digit;
      if (!seen.has(next)) {
        seen.add(next);
        sequence += digit;
        if (build(sequence)) return true;
        sequence = sequence.slice(0, -1);
        seen.delete(next);
      }
    }
    return false;
  }
};
