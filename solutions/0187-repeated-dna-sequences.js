/**
 * 187. Repeated DNA Sequences
 * https://leetcode.com/problems/repeated-dna-sequences/
 * Difficulty: Medium
 *
 * The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T':
 * - For example, "ACGAATTCCG" is a DNA sequence.
 *
 * When studying DNA, it is useful to identify repeated sequences within the DNA.
 *
 * Given a string s that represents a DNA sequence, return all the 10-letter-long sequences
 * (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  let substring = s.slice(0, 10);
  const set = new Set([substring]);
  const result = new Set();

  for (let i = 10; i < s.length; i++) {
    substring = substring.slice(1) + s[i];
    if (set.has(substring)) {
      result.add(substring);
    }
    set.add(substring);
  }

  return [...result];
};
