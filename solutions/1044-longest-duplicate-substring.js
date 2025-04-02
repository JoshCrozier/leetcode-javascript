/**
 * 1044. Longest Duplicate Substring
 * https://leetcode.com/problems/longest-duplicate-substring/
 * Difficulty: Hard
 *
 * Given a string s, consider all duplicated substrings: (contiguous) substrings of s that occur 2
 * or more times. The occurrences may overlap.
 *
 * Return any duplicated substring that has the longest possible length. If s does not have a
 * duplicated substring, the answer is "".
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function(s) {
  const MOD = 1e9 + 7;
  const BASE = 26;
  let left = 1;
  let right = s.length - 1;
  let result = '';

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const candidate = checkLength(mid);
    if (candidate) {
      result = candidate;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;

  function checkLength(len) {
    let hash = 0;
    const seen = new Map();
    let basePow = 1;
    for (let i = 0; i < len - 1; i++) {
      basePow = (basePow * BASE) % MOD;
    }

    for (let i = 0; i < len; i++) {
      hash = (hash * BASE + (s.charCodeAt(i) - 97)) % MOD;
    }

    seen.set(hash, [0]);

    for (let i = 1; i <= s.length - len; i++) {
      hash = (hash - ((s.charCodeAt(i - 1) - 97) * basePow) % MOD + MOD) % MOD;
      hash = (hash * BASE + (s.charCodeAt(i + len - 1) - 97)) % MOD;
      if (seen.has(hash)) {
        const prevIndices = seen.get(hash);
        const currSubstr = s.slice(i, i + len);
        for (const prev of prevIndices) {
          if (s.slice(prev, prev + len) === currSubstr) {
            return currSubstr;
          }
        }
        prevIndices.push(i);
      } else {
        seen.set(hash, [i]);
      }
    }
    return '';
  }
};
