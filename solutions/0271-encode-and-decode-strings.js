/**
 * 271. Encode and Decode Strings
 * https://leetcode.com/problems/encode-and-decode-strings/
 * Difficulty: Medium
 *
 * Design an algorithm to encode a list of strings to a string. The encoded string is then sent over
 * the network and is decoded back to the original list of strings.
 *
 * Machine 1 (sender) has the function:
 * string encode(vector<string> strs) {
 *   // ... your code
 *   return encoded_string;
 * }
 * Machine 2 (receiver) has the function:
 * vector<string> decode(string s) {
 *   //... your code
 *   return strs;
 * }
 * So Machine 1 does:
 * string encoded_string = encode(strs);
 * and Machine 2 does:
 * vector<string> strs2 = decode(encoded_string);
 * strs2 in Machine 2 should be the same as strs in Machine 1.
 *
 * Implement the encode and decode methods.
 *
 * You are not allowed to solve the problem using any serialize methods (such as eval).
 */

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
  return strs.map(str => `${str.length}:${str}`).join('');
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
  const result = [];
  let i = 0;

  while (i < s.length) {
    const colon = s.indexOf(':', i);
    const len = parseInt(s.slice(i, colon));
    result.push(s.slice(colon + 1, colon + 1 + len));
    i = colon + 1 + len;
  }

  return result;
};
