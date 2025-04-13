/**
 * 1397. Find All Good Strings
 * https://leetcode.com/problems/find-all-good-strings/
 * Difficulty: Hard
 *
 * Given the strings s1 and s2 of size n and the string evil, return the number of good strings.
 *
 * A good string has size n, it is alphabetically greater than or equal to s1, it is alphabetically
 * smaller than or equal to s2, and it does not contain the string evil as a substring. Since the
 * answer can be a huge number, return this modulo 109 + 7.
 */

/**
 * @param {number} n
 * @param {string} s1
 * @param {string} s2
 * @param {string} evil
 * @return {number}
 */
var findGoodStrings = function(n, s1, s2, evil) {
  const MOD = 1e9 + 7;
  const memo = new Map();
  const evilLPS = computeLPS(evil);

  function computeLPS(pattern) {
    const lps = new Array(pattern.length).fill(0);
    let length = 0;
    let i = 1;
    while (i < pattern.length) {
      if (pattern[i] === pattern[length]) {
        length++;
        lps[i] = length;
        i++;
      } else {
        if (length !== 0) {
          length = lps[length - 1];
        } else {
          lps[i] = 0;
          i++;
        }
      }
    }
    return lps;
  }

  function countValid(pos, evilMatched, bound1, bound2, str1, str2, evilStr, lps) {
    if (evilMatched === evilStr.length) return 0;
    if (pos === n) return 1;

    const key = `${pos}:${evilMatched}:${bound1}:${bound2}`;
    if (memo.has(key)) return memo.get(key);

    let result = 0;
    const start = bound1 ? str1[pos] : 'a';
    const end = bound2 ? str2[pos] : 'z';

    for (let c = start; c <= end; c = String.fromCharCode(c.charCodeAt(0) + 1)) {
      let newEvilMatched = evilMatched;
      while (newEvilMatched > 0 && c !== evilStr[newEvilMatched]) {
        newEvilMatched = lps[newEvilMatched - 1];
      }
      if (c === evilStr[newEvilMatched]) {
        newEvilMatched++;
      }

      const newBound1 = bound1 && c === str1[pos];
      const newBound2 = bound2 && c === str2[pos];

      result = (result + countValid(
        pos + 1, newEvilMatched, newBound1, newBound2, str1, str2, evilStr, lps
      )) % MOD;
    }

    memo.set(key, result);
    return result;
  }

  return countValid(0, 0, true, true, s1, s2, evil, evilLPS);
};
