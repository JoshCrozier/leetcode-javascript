/**
 * 411. Minimum Unique Word Abbreviation
 * https://leetcode.com/problems/minimum-unique-word-abbreviation/
 * Difficulty: Hard
 *
 * A string can be abbreviated by replacing any number of non-adjacent substrings with their
 * lengths. For example, a string such as "substitution" could be abbreviated as (but not
 * limited to):
 * - "s10n" ("s ubstitutio n")
 * - "sub4u4" ("sub stit u tion")
 * - "12" ("substitution")
 * - "su3i1u2on" ("su bst i t u ti on")
 * - "substitution" (no substrings replaced)
 *
 * Note that "s55n" ("s ubsti tutio n") is not a valid abbreviation of "substitution" because
 * the replaced substrings are adjacent.
 *
 * The length of an abbreviation is the number of letters that were not replaced plus the
 * number of substrings that were replaced. For example, the abbreviation "s10n" has a length
 * of 3 (2 letters + 1 substring) and "su3i1u2on" has a length of 9 (6 letters + 3 substrings).
 *
 * Given a target string target and an array of strings dictionary, return an abbreviation
 * of target with the shortest possible length such that it is not an abbreviation of any
 * string in dictionary. If there are multiple shortest abbreviations, return any of them.
 */

/**
 * @param {string} target
 * @param {string[]} dictionary
 * @return {string}
 */
var minAbbreviation = function(target, dictionary) {
  let minLength = target.length;
  let result = target;
  const validDict = dictionary.filter(word => word.length === target.length);

  for (let mask = 0; mask < (1 << target.length); mask++) {
    const abbr = getAbbr(target, mask);
    if (abbr.length <= minLength) {
      let isValid = true;
      for (const word of validDict) {
        if (conflicts(abbr, word)) {
          isValid = false;
          break;
        }
      }
      if (isValid) {
        if (abbr.length < minLength) {
          minLength = abbr.length;
          result = abbr;
        } else if (abbr.length === minLength && abbr < result) {
          result = abbr;
        }
      }
    }
  }

  return result;

  function getAbbr(str, mask) {
    let abbr = '';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (mask & (1 << i)) {
        if (count) {
          abbr += count;
          count = 0;
        }
        abbr += str[i];
      } else {
        count++;
      }
    }
    if (count) abbr += count;
    return abbr;
  }

  function conflicts(abbr, word) {
    let i = 0;
    let j = 0;
    while (i < abbr.length && j < word.length) {
      if (i < abbr.length && j < word.length && abbr[i] === word[j]) {
        i++;
        j++;
      } else if (i < abbr.length && /\d/.test(abbr[i])) {
        let num = 0;
        while (i < abbr.length && /\d/.test(abbr[i])) {
          num = num * 10 + Number(abbr[i++]);
        }
        j += num;
      } else {
        return false;
      }
    }
    return i === abbr.length && j === word.length;
  }
};
