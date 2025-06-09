/**
 * 249. Group Shifted Strings
 * https://leetcode.com/problems/group-shifted-strings/
 * Difficulty: Medium
 *
 * Perform the following shift operations on a string:
 * - Right shift: Replace every letter with the successive letter of the English alphabet, where
 *   'z' is replaced by 'a'. For example, "abc" can be right-shifted to "bcd" or "xyz" can be
 *   right-shifted to "yza".
 * - Left shift: Replace every letter with the preceding letter of the English alphabet, where
 *   'a' is replaced by 'z'. For example, "bcd" can be left-shifted to "abc" or "yza" can be
 *   left-shifted to "xyz".
 *
 * We can keep shifting the string in both directions to form an endless shifting sequence.
 * - For example, shift "abc" to form the sequence: ... <-> "abc" <-> "bcd" <-> ... <-> "xyz"
 *   <-> "yza" <-> .... <-> "zab" <-> "abc" <-> ...
 *
 * You are given an array of strings strings, group together all strings[i] that belong to the same
 * shifting sequence. You may return the answer in any order.
 */

/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
  const groups = new Map();

  for (const str of strings) {
    const key = getShiftKey(str);
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(str);
  }

  return Array.from(groups.values());

  function getShiftKey(str) {
    if (str.length === 1) return 'single';
    const key = [];
    for (let i = 1; i < str.length; i++) {
      let diff = str.charCodeAt(i) - str.charCodeAt(i - 1);
      if (diff < 0) diff += 26;
      key.push(diff);
    }
    return key.join(',');
  }
};
