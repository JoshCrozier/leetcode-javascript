/**
 * 1419. Minimum Number of Frogs Croaking
 * https://leetcode.com/problems/minimum-number-of-frogs-croaking/
 * Difficulty: Medium
 *
 * You are given the string croakOfFrogs, which represents a combination of the string "croak"
 * from different frogs, that is, multiple frogs can croak at the same time, so multiple "croak"
 * are mixed.
 *
 * Return the minimum number of different frogs to finish all the croaks in the given string.
 *
 * A valid "croak" means a frog is printing five letters 'c', 'r', 'o', 'a', and 'k' sequentially.
 * The frogs have to print all five letters to finish a croak. If the given string is not a
 * combination of a valid "croak" return -1.
 */

/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function(croakOfFrogs) {
  let activeFrogs = 0;
  let maxFrogs = 0;
  const counts = { c: 0, r: 0, o: 0, a: 0, k: 0 };
  const order = 'croak';

  for (const char of croakOfFrogs) {
    if (!order.includes(char)) return -1;
    counts[char]++;

    if (char === 'c') {
      activeFrogs++;
      maxFrogs = Math.max(maxFrogs, activeFrogs);
    } else if (char === 'k') {
      activeFrogs--;
    }

    for (let i = 1; i < order.length; i++) {
      if (counts[order[i]] > counts[order[i - 1]]) return -1;
    }
  }

  return activeFrogs === 0 && counts.c === counts.k ? maxFrogs : -1;
};
